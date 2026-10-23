# Sparkshub 360 (sparkhubtz)

Sparkshub 360 is an interactive educational and STEAM lab platform designed for kids and youth, featuring hands-on learning in robotics, 3D printing, AI coding, science labs, and creative innovation.

## Features

- **Next.js 16 (App Router)** with React 19 & TypeScript
- **Interactive 3D Animations** using Three.js & Canvas Confetti
- **Multi-stage Dockerfile** optimized for Dokploy, Coolify, and production environments using Next.js standalone mode
- **Docker Compose** support for local containerized development and quick deployments

---

## Getting Started Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build

Build the project locally:
```bash
npm run build
npm run start
```

---

## Deployment with Docker & Dokploy

This project comes ready for containerized deployment on [Dokploy](https://dokploy.com) or any Docker-compatible hosting.

### Method 1: Dokploy (GitHub Integration)

1. In your Dokploy dashboard, create a new **Application**.
2. Select **Git** / **GitHub** and connect `msacha255/sparkshub360`.
3. In **Build Settings**:
   - Build Type: **Dockerfile**
   - Dockerfile path: `/Dockerfile`
   - Port: `3000`
4. Deploy! Dokploy will build the multi-stage image and expose port 3000 automatically with SSL/Traefik routing.

### Method 2: Docker Compose

You can also run or deploy via Docker Compose:
```bash
docker compose up -d --build
```
The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## License

MIT
