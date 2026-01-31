<script>
    import { config } from "$lib/config.js";

    // Filter featured projects
    const featuredProjects = config.projects.filter((p) => p.featured);
    const allProjects = config.projects;

    let showAll = $state(false);

    const displayedProjects = $derived(
        showAll ? allProjects : featuredProjects,
    );
</script>

<section id="projects" class="projects">
    <div class="container">
        <h2 class="section-title fade-in-up">Featured Projects</h2>
        <p class="section-subtitle fade-in-up">
            Some of my recent work in FiveM development
        </p>

        <div class="projects-grid">
            {#each displayedProjects as project, i}
                <div
                    class="project-card card fade-in-up"
                    style="animation-delay: {i * 0.1}s"
                >
                    <div class="project-image">
                        <img src={project.image} alt={project.title} />
                        <div class="project-overlay">
                            <div class="project-links">
                                {#if project.liveUrl}
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="btn btn-primary"
                                    >
                                        Live Demo
                                    </a>
                                {/if}
                                {#if project.githubUrl}
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="btn btn-secondary"
                                    >
                                        GitHub
                                    </a>
                                {/if}
                            </div>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div class="project-tags">
                            {#each project.tags as tag}
                                <span class="tag">{tag}</span>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        {#if allProjects.length > featuredProjects.length}
            <div class="show-more">
                <button
                    class="btn btn-secondary"
                    onclick={() => (showAll = !showAll)}
                >
                    {showAll ? "Show Less" : "Show All Projects"}
                </button>
            </div>
        {/if}
    </div>
</section>

<style>
    .projects {
        background: var(--bg-secondary);
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

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }

    .project-card {
        overflow: hidden;
        padding: 0;
        transition: all var(--duration-normal) var(--easing);
    }

    .project-card:hover {
        transform: translateY(-8px);
    }

    .project-image {
        position: relative;
        width: 100%;
        height: 240px;
        overflow: hidden;
        background: var(--bg-tertiary);
    }

    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--duration-slow) var(--easing);
    }

    .project-card:hover .project-image img {
        transform: scale(1.1);
    }

    .project-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(10, 10, 15, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity var(--duration-normal) var(--easing);
    }

    .project-card:hover .project-overlay {
        opacity: 1;
    }

    .project-links {
        display: flex;
        gap: 1rem;
    }

    .project-content {
        padding: 2rem;
    }

    .project-content h3 {
        font-size: 1.5rem;
        margin-bottom: 0.75rem;
    }

    .project-content p {
        color: var(--text-tertiary);
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .tag {
        display: inline-block;
        padding: 0.375rem 0.875rem;
        background: var(--bg-tertiary);
        border: 1px solid var(--border-primary);
        border-radius: var(--radius-full);
        font-size: 0.875rem;
        color: var(--text-secondary);
        transition: all var(--duration-fast) var(--easing);
    }

    .tag:hover {
        border-color: var(--accent-primary);
        color: var(--accent-primary);
    }

    .show-more {
        text-align: center;
    }

    @media (max-width: 768px) {
        .projects-grid {
            grid-template-columns: 1fr;
        }

        .project-links {
            flex-direction: column;
        }
    }
</style>
