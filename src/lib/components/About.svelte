<script>
    import { config } from "$lib/config.js";
</script>

<section id="about" class="about">
    <div class="container">
        <h2 class="section-title fade-in-up">About Me</h2>

        <div class="about-content">
            <div class="about-text fade-in-up">
                <p class="bio">{config.personal.bio}</p>

                {#if config.noctis.enabled}
                    <div class="noctis-card card">
                        <div class="noctis-header">
                            <h3>🎮 {config.noctis.role}</h3>
                            <span class="badge">Noctis.id</span>
                        </div>
                        <p>{config.noctis.description}</p>
                        <div class="noctis-links">
                            <a
                                href={config.noctis.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-primary"
                            >
                                Visit Noctis.id
                            </a>
                            <a
                                href={config.noctis.serverLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-secondary"
                            >
                                FiveM Server
                            </a>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>

<style>
    .about {
        background: var(--bg-secondary);
    }

    .section-title {
        text-align: center;
        margin-bottom: 3rem;
    }

    .about-content {
        max-width: 900px;
        margin: 0 auto;
    }

    .about-text {
        animation-delay: 0.2s;
    }

    .bio {
        font-size: 1.125rem;
        line-height: 1.8;
        color: var(--text-secondary);
        margin-bottom: 2rem;
    }

    .noctis-card {
        margin-top: 2rem;
        background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.1) 0%,
            rgba(139, 92, 246, 0.1) 100%
        );
        border: 1px solid var(--border-accent);
    }

    .noctis-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .noctis-header h3 {
        margin: 0;
        font-size: 1.5rem;
    }

    .badge {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: var(--accent-gradient);
        border-radius: var(--radius-full);
        font-size: 0.875rem;
        font-weight: 600;
        color: white;
    }

    .noctis-card p {
        color: var(--text-tertiary);
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .noctis-links {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        .noctis-header {
            flex-direction: column;
            align-items: flex-start;
        }

        .noctis-links {
            flex-direction: column;
        }

        .noctis-links .btn {
            width: 100%;
            justify-content: center;
        }
    }
</style>
