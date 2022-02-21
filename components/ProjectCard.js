import { projectsData } from "./ProjectsData";
import Link from "next/link";
import Image from "next/image";
const ProjectCard = () => {
  return (
    <div className="projects" id="projects">
      {projectsData.map(
        ({ id, title, subtitle, demoLink, readMoreLink, githubLink, gif }) => (
          <div className="project-content" key={id}>
            <div className="text-project">
              <div className="text-container">
                <div className="topic-project">
                  <h2>{title}</h2>
                </div>
                <div className="details-project">
                  <p>{subtitle}</p>
                </div>
              </div>
              <div className="btn-project">
                {demoLink && (
                  <Link href={demoLink} passHref>
                    <a target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        name="btn-live-demo"
                        className="btn-live-demo"
                      >
                        Live Demo
                      </button>
                    </a>
                  </Link>
                )}
                {githubLink && (
                  <Link href={githubLink} passHref>
                    <a target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        name="btn-live-demo"
                        className="btn-live-demo"
                      >
                        Github
                      </button>
                    </a>
                  </Link>
                )}

                {readMoreLink && (
                  <Link href={readMoreLink} passHref>
                    <a target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        name="btn-live-demo"
                        className="btn-live-demo"
                      >
                        Read more
                      </button>
                    </a>
                  </Link>
                )}
              </div>
            </div>
            <div className="gif-photo">
              <Image
                blurDataURL={gif}
                placeholder="blur"
                src={gif}
                width={600}
                height={337}
                alt="project_pic"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectCard;
