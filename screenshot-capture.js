#!/usr/bin/env node

import { chromium } from 'playwright';
import path from 'path';

async function takeScreenshots() {
  console.log('🎭 Starting MC Design System Screenshot Session...');
  
  const browser = await chromium.launch({ 
    headless: false,  // Let's see what's happening
    channel: 'chrome'
  });
  
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  
  const page = await context.newPage();
  
  try {
    // Navigate to our beautiful showcase
    const showcaseUrl = 'file:///Users/matt/Documents/projects/mc-design-system/showcase/index.html';
    console.log(`📍 Navigating to: ${showcaseUrl}`);
    await page.goto(showcaseUrl, { waitUntil: 'networkidle' });
    
    // Wait for animations to settle
    await page.waitForTimeout(2000);
    
    // Screenshot 1: Full page overview
    console.log('📸 Taking full page screenshot...');
    await page.screenshot({
      path: '/Users/matt/Documents/projects/mc-design-system/screenshots/01-full-page-overview.png',
      fullPage: true
    });
    
    // Screenshot 2: Hero section with glowing title
    console.log('📸 Capturing hero section...');
    const heroSection = page.locator('header.section').first();
    await heroSection.screenshot({
      path: '/Users/matt/Documents/projects/mc-design-system/screenshots/02-hero-glowing-title.png'
    });
    
    // Screenshot 3: Color palette section
    console.log('📸 Capturing color palette...');
    const colorSection = page.locator('section').nth(1); // Second section should be colors
    await colorSection.screenshot({
      path: '/Users/matt/Documents/projects/mc-design-system/screenshots/03-color-palette.png'
    });
    
    // Screenshot 4: Interactive hover effect on color card
    console.log('📸 Capturing hover effect on color card...');
    const colorCard = page.locator('.grid > div').first();
    await colorCard.hover();
    await page.waitForTimeout(500); // Let hover animation complete
    await colorCard.screenshot({
      path: '/Users/matt/Documents/projects/mc-design-system/screenshots/04-color-card-hover.png'
    });
    
    // Screenshot 5: Form section with glass morphism
    console.log('📸 Capturing form section...');
    const formSection = page.locator('section').nth(3); // Should be form section
    await formSection.screenshot({
      path: '/Users/matt/Documents/projects/mc-design-system/screenshots/05-glass-form-section.png'
    });
    
    // Screenshot 6: Card showcase section
    console.log('📸 Capturing card showcase...');
    const cardSection = page.locator('section').nth(4); // Should be card section
    await cardSection.screenshot({
      path: '/Users/matt/Documents/projects/mc-design-system/screenshots/06-card-showcase.png'
    });
    
    // Screenshot 7: Card with hover effect
    console.log('📸 Capturing card hover effect...');
    const interactiveCard = page.locator('[style*="cursor: pointer"]').first();
    if (await interactiveCard.count() > 0) {
      await interactiveCard.hover();
      await page.waitForTimeout(500);
      await interactiveCard.screenshot({
        path: '/Users/matt/Documents/projects/mc-design-system/screenshots/07-card-hover-effect.png'
      });
    }
    
    // Screenshot 8: Status feedback section
    console.log('📸 Capturing status section...');
    const statusSection = page.locator('section').nth(5); // Should be status section
    if (await statusSection.count() > 0) {
      await statusSection.screenshot({
        path: '/Users/matt/Documents/projects/mc-design-system/screenshots/08-status-feedback.png'
      });
    }
    
    // Screenshot 9: Final CTA section with gradient
    console.log('📸 Capturing final CTA section...');
    const ctaSection = page.locator('section').last();
    await ctaSection.screenshot({
      path: '/Users/matt/Documents/projects/mc-design-system/screenshots/09-final-cta-gradient.png'
    });
    
    console.log('✨ All screenshots captured successfully!');
    console.log('📁 Check: /Users/matt/Documents/projects/mc-design-system/screenshots/');
    
  } catch (error) {
    console.error('❌ Error during screenshot capture:', error);
  } finally {
    await browser.close();
  }
}

takeScreenshots().catch(console.error);
