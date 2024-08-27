<!-- src/components/ThemeSwitch.vue -->
<template>
  <div class="form-check form-switch mx-3">
    <label class="form-check-label" for="theme-switch">
      <i class="bi bi-sun-fill mx-1"></i>
      <i class="bi bi-moon-stars-fill mx-1"></i>
    </label>
    <input class="form-check-input" type="checkbox" id="theme-switch" />
  </div>
</template>

<script>
export default {
  mounted() {
    const themeSwitch = document.querySelector('.form-check-input');
    const body = document.body;

    // Load the theme state from localStorage
    const storedGlobalTheme = localStorage.getItem('globalTheme');
    if (storedGlobalTheme) {
      body.setAttribute('data-bs-theme', storedGlobalTheme);
      if (storedGlobalTheme === 'dark') {
        themeSwitch.checked = true;
      }
    } else {
      body.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('globalTheme', 'dark');
      themeSwitch.checked = true;
    }

    // Save the theme state to localStorage when the switch is changed
    themeSwitch.addEventListener('change', () => {
      const newTheme = themeSwitch.checked ? 'dark' : 'light';
      body.setAttribute('data-bs-theme', newTheme);
      localStorage.setItem('globalTheme', newTheme);
    });
  }
};
</script>

<style scoped>
/* Add any specific styles for the theme switch here if needed */
</style>
