<script setup lang="ts">
    const { signOut } = useAuth();
    await signOut();
    await navigateTo('/')
</script>