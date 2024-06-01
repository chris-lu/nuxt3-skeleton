<template>
    <div>
        <header>
            <h1>Welcome to My Website</h1>
        </header>

        <section>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam ultricies, nisl nunc tincidunt nunc, id lacinia nunc nunc vitae nunc.</p>
        </section>

        <section>
            <h2>Contact Us</h2>
            <p>For any inquiries or feedback, please feel free to contact us using the information below:</p>
            <ul>
                <li>Email: info@example.com</li>
                <li>Phone: 123-456-7890</li>
            </ul>
        </section>


    </div>
</template>

<script setup lang="ts">
const { status, data, signIn, signOut, refresh   } = useAuth()
status.value // Session status: `unauthenticated`, `loading`, `authenticated`
data.value // Session data, e.g., expiration, user.email, ...
await signIn() // Sign in the user
await refresh() // Refresh the token 
await signOut() // Sign out the user
</script>