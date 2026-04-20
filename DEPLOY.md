# Deployment Guide

## Quick Deploy from GitHub

```bash
./deploy.sh https://github.com/alexeigrebnyov/dressshop-bundle.git main
```

This will:
1. Clone the repository
2. Install dependencies
3. Build the Next.js application
4. Create Docker image
5. Run container on port 3000

## Manual Deployment

### 1. Clone repository
```bash
git clone https://github.com/alexeigrebnyov/dressshop-bundle.git
cd dressshop
```

### 2. Configure environment
```bash
cp .env.deploy.example .env
# Edit .env with your values
```

### 3. Build and run with Docker
```bash
docker build -t dressshop .
docker run -d -p 3000:3000 --name dressshop dressshop
```

## Docker Commands

```bash
# View logs
docker logs -f dressshop

# Stop container
docker stop dressshop

# Remove container
docker rm dressshop

# Rebuild after updates
docker build -t dressshop . && docker stop dressshop && docker rm dressshop && docker run -d -p 3000:3000 --name dressshop dressshop
```

## Environment Variables

See `.env.deploy.example` for all configuration options.
