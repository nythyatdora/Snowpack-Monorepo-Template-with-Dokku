# **Full Stack Application with Dokku [MERN]**

## **Description 📝**

This is a template for Monoreposity with Dokku. 

## **Stacks 🥞**

- Lerna
- Snowpack Typescrpt React
- Typescript Express
- MongoDB

## **Installation 🔨**

### **1. Setup Project**

1. **_Clone_** this project to your destination

2. **_Change Directory_** to the clone folder

3. **_Install Lerna as Global Dependency_**

```bash
yarn add -g lerna
```

4. **_Install dependencies_**

```bash
lerna bootstrap
```

### **2. Setup Dokku**

1. **_Create Server_**

2. **_Install Dokku_** [Installation Process](http://dokku.viewdocs.io/dokku/getting-started/installation/)

3. **_Create Express Server_**

```bash
dokku app:create api
```

4. **_Create MongoDB Server_**

```bash
sudo dokku plugin:install https://github.com/dokku/dokku-mongo.git mongo && dokku mongo:create db && dokku mongo:link app
```

5. **_Create React Server_**

```bash
dokku app:create app
```

### **3. Setup Applications**

1. **_Check Monorepo Configuration_**

```bash
cat .dokku-monorepo
```

2. **_Add React Application to Dokku_**

```bash
git remote add app dokku@[ip_address]:app
```

3. **_Add Express Application to Dokku_**

```bash
git remote add api dokku@[ip_address]:api
```

### **4. Test CI/CD**

1. **_Test React_**

```bash
git push app [your_branch]
```

2. **_Test Express_**

```bash
git push api [your_branch]
```


## **Resources 📚**
[Lerna more about Lerna](https://github.com/lerna/lerna)

[Learn more about Snowpack React](https://www.snowpack.dev/tutorials/react)

[Learn more about Dokku](http://dokku.viewdocs.io/dokku/)

[Learn more about Dokku MongoDB Plugin](https://github.com/dokku/dokku-mongo)

[Learn more about Dokku Monorepo Plugin](https://github.com/notpushkin/dokku-monorepo)