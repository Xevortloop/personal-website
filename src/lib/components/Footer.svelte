<script>
    import { config } from "$lib/config.js";

    const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-text">
                <p>
                    &copy; {currentYear}
                    {config.personal.name}. All rights reserved.
                </p>
                <p class="footer-subtitle">
                    Built with Svelte • Deployed on GitHub Pages
                </p>
            </div>

            <div class="footer-links">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        background: var(--bg-secondary);
        padding: 3rem 0;
        border-top: 1px solid var(--border-primary);
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .footer-text p {
        color: var(--text-tertiary);
        font-size: 0.95rem;
    }

    .footer-subtitle {
        margin-top: 0.5rem;
        font-size: 0.875rem;
        color: var(--text-muted);
    }

    .footer-links {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
    }

    .footer-links a {
        color: var(--text-secondary);
        font-size: 0.95rem;
        transition: color var(--duration-fast) var(--easing);
    }

    .footer-links a:hover {
        color: var(--accent-primary);
    }

    @media (max-width: 768px) {
        .footer-content {
            flex-direction: column;
            text-align: center;
        }

        .footer-links {
            justify-content: center;
        }
    }
</style>
