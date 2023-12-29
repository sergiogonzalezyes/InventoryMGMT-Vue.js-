<template>
  <div class="landing">
    <section class="hero">
      <h1>Welcome to Your Inventory Management System</h1>
      <p>Manage your products, stock levels, and orders efficiently in one place.</p>
      <button class="cta">Get Started</button>
    </section>

    <section class="features">
      <h2>Features</h2>
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
import DocumentationIcon from '../icons/IconDocumentation.vue'
import ToolingIcon from '../icons/IconTooling.vue'
import EcosystemIcon from '../icons/IconEcosystem.vue'
import CommunityIcon from '../icons/IconCommunity.vue'
import SupportIcon from '../icons/IconSupport.vue'
</script>

<style scoped>
.landing {
  margin: 0;
  padding: 0;
}

.hero {
  text-align: center;
  padding: 4rem 0;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.hero .cta {
  padding: 1rem 2rem;
  background-color: #5865f2; /* Brand color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.hero .cta:hover {
  background-color: #4752c4;
}

.features {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  padding: 2rem;
}

.feature {
  width: calc(33.333% - 2rem); /* Three features per row with gap */
  padding: 1rem;
  background: #2c2f33;
  color: white;
  border-radius: 8px;
}

.feature h3 {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.feature p {
  font-size: 1rem;
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
