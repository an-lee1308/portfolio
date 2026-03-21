import Prism from "prismjs";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/plugins/autolinker/prism-autolinker.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
import "prismjs/themes/prism-okaidia.min.css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { externals, internal } from "../urls";

const content = `/*
  author: Le Van An
  description: My profile as a Full-Stack Developer
  linkedin: https://linkedin.com/in/anlee1308
  github: https://github.com/an-lee1308
*/
const my_profile: IGoodDeveloper = {
  fullname: 'Le Van An',
  title: 'Full-Stack Developer',
  yoe: '4+',
  skills: {
    languages: ['JavaScript', 'TypeScript', 'Java'],
    frontend: [
      'React.js', 'Next.js', 'TailwindCSS', 'Bootstrap',
      'Redux', 'Zustand', 'Antd'
    ],
    backend: [
      'Java Spring Boot', 'Hibernate',
      'Node.js', 'WebSocket', 'Elasticsearch'
    ],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
    tool_n_platforms: ['Docker', 'Kubernetes', 'Jira', 'Confluence']
  },
  personality_traits: {
    hard_worker: true,
    quick_learner: true,
    team_player: true,
    detail_oriented: true,
    adaptable: true,
    proactive: true
  }
};`;

const Window = () => {
  const [code] = useState(content);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="flex-1 z-20">
      <div className="bg-gray-950 relative">
        <div className="flex items-center bg-background border-b border-b-primary py-0.5">
          <div className="px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full hover:scale-125 duration-100 animate-ease-out bg-red-500"></div>
            <div className="w-3 h-3 rounded-full hover:scale-125 duration-100 animate-ease-out bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full hover:scale-125 duration-100 animate-ease-out bg-green-500"></div>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-sm leading-normal text-foreground flex items-center font-code p-2 bg-primary/40 rounded-md">
              <span className="text-code-editor-value">{`{{gateway}}`}</span>
              /auth/me
            </span>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="p-2 bg-primary/10 hover:bg-primary/40 duration-100 rounded-md">
                    <a
                      href={externals.linkedin}
                      target="_blank"
                      className="text-sm leading-normal text-foreground flex items-center font-code"
                    >
                      <FaLinkedinIn className="w-4 h-4 text-foreground" />
                      <span className="hidden lg:block">/@anlee1308</span>
                    </a>
                  </div>
                </TooltipTrigger>
                <TooltipContent>My Linkedin</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="p-2 bg-primary/10 hover:bg-primary/40 duration-100 rounded-md">
                    <a
                      href={externals.github}
                      target="_blank"
                      className="text-sm leading-normal text-foreground flex items-center font-code"
                    >
                      <FaGithub className="w-4 h-4 text-foreground" />
                      <span className="hidden lg:block">/@an-lee1308</span>
                    </a>
                  </div>
                </TooltipTrigger>
                <TooltipContent>My Github</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="p-2 bg-primary/10 hover:bg-primary/40 duration-100 rounded-md">
                    <Link
                      to={internal.cv}
                      target="_blank"
                      className="text-sm leading-normal text-foreground flex items-center font-code"
                    >
                      <FaUserCircle className="w-4 h-4 text-foreground" />
                      <span className="hidden lg:block">/resume</span>
                    </Link>
                  </div>
                </TooltipTrigger>
                <TooltipContent>My Resume</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <pre className="line-numbers code-editor" data-language="JavaScript">
          <code className="language-javascript !text-foreground">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default Window;
