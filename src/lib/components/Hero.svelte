<script>
    import { config } from "$lib/config.js";
</script>

<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-text fade-in-up">
                <h1>
                    Hi, I'm <span class="gradient-text"
                        >{config.personal.name}</span
                    >
                </h1>
                <h2 class="hero-title">{config.personal.title}</h2>
                <p class="hero-tagline">{config.personal.tagline}</p>

                <div class="hero-buttons">
                    <a href="#contact" class="btn btn-primary">
                        Get In Touch
                    </a>
                    <a href="#projects" class="btn btn-secondary">
                        View My Work
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Animated Background -->
    <div class="hero-bg">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
    </div>
</section>

<style>
    .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }

    .hero-content {
        position: relative;
        z-index: 2;
        text-align: center;
    }

    .hero-text {
        max-width: 800px;
        margin: 0 auto;
    }

    .hero-title {
        margin-top: 1rem;
        color: var(--text-secondary);
        font-weight: 600;
    }

    .hero-tagline {
        margin-top: 1.5rem;
        font-size: 1.25rem;
        color: var(--text-tertiary);
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .hero-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2.5rem;
        flex-wrap: wrap;
    }

    /* Animated Background */
    .hero-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        overflow: hidden;
    }

    .gradient-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.3;
        animation: float 20s ease-in-out infinite;
    }

    .orb-1 {
        width: 500px;
        height: 500px;
        background: var(--accent-primary);
        top: -250px;
        left: -250px;
        animation-delay: 0s;
    }

    .orb-2 {
        width: 400px;
        height: 400px;
        background: var(--accent-secondary);
        bottom: -200px;
        right: -200px;
        animation-delay: 7s;
    }

    .orb-3 {
        width: 300px;
        height: 300px;
        background: var(--accent-tertiary);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation-delay: 14s;
    }

    @media (max-width: 768px) {
        .hero {
            min-height: 80vh;
        }

        .hero-tagline {
            font-size: 1.1rem;
        }

        .hero-buttons {
            flex-direction: column;
            align-items: center;
        }

        .gradient-orb {
            filter: blur(60px);
        }

        .orb-1 {
            width: 300px;
            height: 300px;
        }

        .orb-2 {
            width: 250px;
            height: 250px;
        }

        .orb-3 {
            width: 200px;
            height: 200px;
        }
    }
</style>
