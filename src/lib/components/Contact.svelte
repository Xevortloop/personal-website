<script lang="ts">
    import { config } from "$lib/config.js";

    let copiedDiscord = $state(false);
    let copiedEmail = $state(false);

    function copyToClipboard(text: string, type: string) {
        navigator.clipboard.writeText(text);
        if (type === "discord") {
            copiedDiscord = true;
            setTimeout(() => (copiedDiscord = false), 2000);
        } else if (type === "email") {
            copiedEmail = true;
            setTimeout(() => (copiedEmail = false), 2000);
        }
    }
</script>

<section id="contact" class="contact">
    <div class="container">
        <h2 class="section-title fade-in-up">Get In Touch</h2>
        <p class="section-subtitle fade-in-up">
            Let's work together on your next FiveM project
        </p>

        <div class="contact-grid">
            {#if config.contact.discord.enabled}
                <div class="contact-card card fade-in-up">
                    <div class="contact-icon discord-icon">
                        <svg viewBox="0 0 127.14 96.36" fill="currentColor">
                            <path
                                d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                            />
                        </svg>
                    </div>
                    <h3>Discord</h3>
                    <p class="contact-value">
                        {config.contact.discord.username}
                    </p>
                    <p class="contact-tag">{config.contact.discord.tag}</p>
                    <button
                        class="btn btn-primary"
                        onclick={() =>
                            copyToClipboard(
                                config.contact.discord.username,
                                "discord",
                            )}
                    >
                        {copiedDiscord ? "✓ Copied!" : "Copy Username"}
                    </button>
                </div>
            {/if}

            {#if config.contact.email.enabled}
                <div
                    class="contact-card card fade-in-up"
                    style="animation-delay: 0.1s"
                >
                    <div class="contact-icon">📧</div>
                    <h3>Email</h3>
                    <p class="contact-value">{config.contact.email.address}</p>
                    <div class="contact-buttons">
                        <a
                            href="mailto:{config.contact.email.address}"
                            class="btn btn-primary"
                        >
                            Send Email
                        </a>
                        <button
                            class="btn btn-secondary"
                            onclick={() =>
                                copyToClipboard(
                                    config.contact.email.address,
                                    "email",
                                )}
                        >
                            {copiedEmail ? "✓ Copied!" : "Copy"}
                        </button>
                    </div>
                </div>
            {/if}
        </div>

        {#if config.social.github.enabled || config.social.twitter.enabled || config.social.linkedin.enabled}
            <div class="social-links fade-in-up">
                <h3>Find me on</h3>
                <div class="social-icons">
                    {#if config.social.github.enabled}
                        <a
                            href={config.social.github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="social-icon"
                            aria-label="GitHub Profile"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                />
                            </svg>
                        </a>
                    {/if}
                    {#if config.social.twitter.enabled}
                        <a
                            href={config.social.twitter.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="social-icon"
                            aria-label="Twitter Profile"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                />
                            </svg>
                        </a>
                    {/if}
                    {#if config.social.linkedin.enabled}
                        <a
                            href={config.social.linkedin.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="social-icon"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    {/if}
                </div>
            </div>
        {/if}
    </div>
</section>

<style>
    .contact {
        background: var(--bg-primary);
    }

    .section-title {
        text-align: center;
        margin-bottom: 1rem;
    }

    .section-subtitle {
        text-align: center;
        color: var(--text-tertiary);
        font-size: 1.125rem;
        margin-bottom: 3rem;
    }

    .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto 4rem;
    }

    .contact-card {
        text-align: center;
        padding: 3rem 2rem;
        transition: all var(--duration-normal) var(--easing);
    }

    .contact-card:hover {
        transform: translateY(-8px);
        border-color: var(--accent-primary);
        box-shadow: var(--shadow-glow);
    }

    .contact-icon {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
    }

    .discord-icon {
        color: #5865f2;
    }

    .discord-icon svg {
        width: 80px;
        height: 80px;
    }

    .contact-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .contact-value {
        font-size: 1.125rem;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
        word-break: break-all;
    }

    .contact-tag {
        font-size: 0.95rem;
        color: var(--text-muted);
        margin-bottom: 1.5rem;
    }

    .contact-buttons {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .social-links {
        text-align: center;
        margin-top: 4rem;
    }

    .social-links h3 {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
        color: var(--text-secondary);
    }

    .social-icons {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .social-icon {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-tertiary);
        border: 1px solid var(--border-primary);
        border-radius: var(--radius-md);
        color: var(--text-primary);
        transition: all var(--duration-normal) var(--easing);
    }

    .social-icon svg {
        width: 24px;
        height: 24px;
    }

    .social-icon:hover {
        background: var(--accent-gradient);
        border-color: transparent;
        transform: translateY(-4px);
        box-shadow: var(--shadow-glow);
    }

    @media (max-width: 768px) {
        .contact-grid {
            grid-template-columns: 1fr;
        }

        .contact-buttons {
            flex-direction: column;
        }

        .contact-buttons .btn {
            width: 100%;
        }
    }
</style>
