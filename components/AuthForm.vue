<script setup lang="ts">


const githubEnabled  = useRuntimeConfig().githubId;
const googleEnabled  = useRuntimeConfig().googleId;
console.log(githubEnabled, googleEnabled);

const isLoading = ref(false);
const name = ref("");
const email = ref("");
const password = ref("");

const { signIn } = useAuth();
const socialAction = async (action: string) => {
    isLoading.value = true

    await signIn(action, {redirect: false})
}

type VARIANT = "LOGIN" | "REGISTER";

const variant = ref<VARIANT>("LOGIN");

const toggleVariant = () => {
  if (variant.value === "REGISTER") {
    variant.value = "LOGIN";
  } else {
    variant.value = "REGISTER";
  }
};

const onSubmit = async () => {
  if (variant.value === "REGISTER") {
    try {
      isLoading.value = true;

      // const { data, error } =
      await $fetch("/api/auth/register", {
        method: "POST",
        body: {
          name: name.value,
          password: password.value,
          email: email.value,
        },
      });

      // if (error.value) {
      //   console.error(error.value);
      // }

      // if (data.value) {
      //   console.log("Succesfully Registered");
      // }
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  } else {
    try {
      isLoading.value = true;

      const result = await signIn("credentials", {
        password: password.value,
        email: email.value,
        redirect: false,
      });

      if (result?.ok && !result.error) {
        console.log("Succesfully Logged in");
      } else {
        console.log("error while loggin in");
      }
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  }
};
</script>

<template>
  <h2 class="mt-8 mx-auto w-100 text-center display-4 fw-bold text-info" style="max-width: 24rem;">
    {{ variant === "LOGIN" ? "Sign to your Account" : "Create a new account" }}
  </h2>

  <div class="mt-8 mx-auto w-100" style="max-width: 24rem;">
    <div class="px-4 shadow rounded bg-light py-4">
      <form class="mb-4" @submit.prevent="onSubmit">
        <!-- input -->

        <Input
          :disabled="isLoading"
          required
          id="name"
          label="Name"
          name="name"
          v-model="name"
          type="text"
          v-if="variant === 'REGISTER'"
        />

        <Input
          :disabled="isLoading"
          required
          id="email"
          label="Email"
          name="email"
          v-model="email"
          type="email"
        />

        <Input
          :disabled="isLoading"
          required
          id="password"
          label="Password"
          name="password"
          v-model="password"
          type="password"
        />

        <div>
          <Button :disabled="isLoading" fullWidth type="submit">
            {{ variant === "LOGIN" ? "Sign In" : "Register" }}
          </Button>
        </div>
        <div class="mt-4">
          <div class="position-relative">
            <div class="position-absolute top-50 start-0 w-100 border-top border-secondary"></div>
            <div class="position-relative d-flex justify-content-center">
              <span class="bg-dark text-light px-2"> OR </span>
            </div>
          </div>
          <div class="mt-4 d-flex gap-2">
            <AuthSocialButton @click="socialAction('github')" icon="bi:github" />
            <AuthSocialButton @click="socialAction('google')" icon="bi:google" />
          </div>
        </div>
        <div class="d-flex gap-2 justify-content-center text-muted mt-4 px-2 text-secondary">
          <div @click="toggleVariant">
            {{
              variant === "LOGIN"
                ? "New User?"
                : "Already have an account?"
            }}
          </div>
          <div role="button" @click="toggleVariant" class="text-decoration-underline cursor-pointer">
            {{ variant === "LOGIN" ? "Create an account" : "Login" }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
