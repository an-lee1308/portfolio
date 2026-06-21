import { education } from "../content.json";
import Card from "./card";

type EducationEntry = {
  time: string;
  degree: string;
  school: string;
  link?: string;
  location?: string;
  description?: string;
};

const Education = () => {
  return (
    <ol className="gap-2 overflow-hidden list-none group/list">
      {(education as EducationEntry[]).map((e, index) => (
        <li
          key={index}
          className="lg:hover:opacity-100! lg:group-hover/list:opacity-60 duration-100"
        >
          <Card>
            <div className="grid grid-cols-12 p-3 md:p-6">
              <div className="col-span-12 md:col-span-3">
                <p className="t6 text-muted-foreground md:mt-1">{e.time}</p>
              </div>
              <div className="col-span-12 md:col-span-9 md:ml-4">
                <div className="flex flex-col">
                  {e.link ? (
                    <a
                      target="_blank"
                      href={e.link}
                      className="t4 leading-7 font-medium mb-2 w-auto"
                      aria-label={`${e.school} website`}
                    >
                      {e.degree}{" "}
                      <span className="text-normal-primary">{e.school}</span>
                    </a>
                  ) : (
                    <p className="t4 leading-7 font-medium mb-2">
                      {e.degree}{" "}
                      <span className="text-normal-primary">{e.school}</span>
                    </p>
                  )}
                  {e.location && (
                    <div className="item-desc mb-2">{e.location}</div>
                  )}
                  {e.description && (
                    <div className="item-desc mb-2">{e.description}</div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </li>
      ))}
    </ol>
  );
};

export default Education;
