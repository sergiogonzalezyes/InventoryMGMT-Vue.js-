<template>
  <div class="landing">
    <section class="hero">
      <h1>Welcome to Your Inventory Management System</h1>
      <p>Manage your products, stock levels, and orders efficiently in one place.</p>
      <button class="cta">Get Started</button>
    </section>
    <h2 class="header">Features</h2>
    <section class="features">

      <div class="feature">
        <DocumentationIcon />
        <h3>Complete Documentation</h3>
        <p>Comprehensive guides and documentation to help you start managing your inventory effectively.</p>
      </div>

      <div class="feature">
        <ToolingIcon />
        <h3>Powerful Tooling</h3>
        <p>Built with the latest technology to ensure fast, secure, and reliable management of your inventory.</p>
      </div>

      <div class="feature">
        <EcosystemIcon />
        <h3>Integrated Ecosystem</h3>
        <p>Seamlessly integrates with your sales channels, accounting, and other systems.</p>
      </div>

      <div class="feature">
        <CommunityIcon />
        <h3>Community Support</h3>
        <p>Join our community of users and get support, tips, and share insights.</p>
      </div>

      <div class="feature">
        <SupportIcon />
        <h3>Dedicated Support</h3>
        <p>Our team is ready to help you with any challenges you face along the way.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import DocumentationIcon from '../../assets/icons/IconDocumentation.vue'
import ToolingIcon from '../../assets/icons/IconTooling.vue'
import EcosystemIcon from '../../assets/icons/IconEcosystem.vue'
import CommunityIcon from '../../assets/icons/IconCommunity.vue'
import SupportIcon from '../../assets/icons/IconSupport.vue'
import { theme } from '../../styles/theme.js'
</script>

<style scoped>
.landing {
  margin: v-bind('theme.spacing.md');
  padding: v-bind('theme.spacing.md');
}

.hero {
  text-align: center;
  padding: v-bind('theme.spacing.xs') 0;
}

.hero h1 {
  font-size: v-bind('theme.fonts.size.xxxxxlg');
  margin-bottom: v-bind('theme.spacing.md');
}

.hero p {
  font-size: v-bind('theme.fonts.size.xlg');
  margin-bottom: v-bind('theme.spacing.xl');
}

.hero .cta {
  padding: 1rem 2rem;
  background-color: v-bind('theme.colors.secondary.light');
  /* Brand color */
  color: v-bind('theme.colors.white');
  border: none;
  border-radius: v-bind('theme.spacing.sm');
  cursor: pointer;
  font-size: v-bind('theme.fonts.size.lg');
  transition: background-color 0.3s;
}

.hero .cta:hover {
  background-color: v-bind('theme.colors.secondary.dark');
}

.header {
  text-align: center;
  font-size: v-bind('theme.fonts.size.xxxlg');
  margin: v-bind('theme.spacing.sm') 0;

}

.features {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  gap: v-bind('theme.spacing.md');
  padding: v-bind('theme.spacing.md');
}

.feature {
  width: calc(33.333% - 2rem);
  /* Three features per row with gap */
  padding: v-bind('theme.spacing.md');
  background: v-bind('theme.colors.primary.dark');
  color: v-bind('theme.colors.white');
  border-radius: v-bind('theme.spacing.md');
}

.feature h3 {
  font-size: v-bind('theme.fonts.size.xlg');
  margin: v-bind('theme.spacing.md') 0;
}

.feature p {
  font-size: v-bind('theme.fonts.size.md');
}

@media (max-width: 768px) {
  .features {
    flex-direction: column;
  }

  .feature {
    width: 100%;
  }
}
</style>
