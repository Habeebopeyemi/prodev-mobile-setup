# 📱 Create Your First Mobile App with Expo

## 🎯 Objective

The goal of this task is to **set up your first mobile application** using the **Expo Router template**.  
You will learn how to scaffold a new React Native project, make modifications, run it on your physical device, and explore the effect of resetting the project.

---

## 🛠️ Steps Followed

### 1. Navigate to Project Directory

I opened my terminal and moved into the parent project folder:

```bash
cd prodev-mobile-setup
npx create-expo-app@latest .
npx expo start
npm run reset-project
```

## Observations: `reset-project` Command

1. The project’s cache was cleared.
2. Node modules were cleaned and reinstalled.
3. The project was restored to its default initial state (like a fresh installation).
4. Local changes such as modified cache, dependencies, or build files were removed.
