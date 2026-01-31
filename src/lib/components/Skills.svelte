<script>
    import { config } from "$lib/config.js";
</script>

<section id="skills" class="skills">
    <div class="container">
        <h2 class="section-title fade-in-up">Skills & Expertise</h2>

        <div class="skills-grid">
            {#each config.skills as skill, i}
                <div
                    class="skill-card card fade-in-up"
                    style="animation-delay: {i * 0.1}s"
                >
                    <div class="skill-icon">{skill.icon}</div>
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .skills {
        background: var(--bg-primary);
    }

    .section-title {
        text-align: center;
        margin-bottom: 3rem;
    }

    .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .skill-card {
        text-align: center;
        transition: all var(--duration-normal) var(--easing);
    }

    .skill-card:hover {
        transform: translateY(-8px);
        border-color: var(--accent-primary);
    }

    .skill-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        animation: float 3s ease-in-out infinite;
    }

    .skill-card h3 {
        font-size: 1.25rem;
        margin-bottom: 0.75rem;
        color: var(--text-primary);
    }

    .skill-card p {
        color: var(--text-tertiary);
        line-height: 1.6;
        font-size: 0.95rem;
    }

    @media (max-width: 768px) {
        .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
    }
</style>
