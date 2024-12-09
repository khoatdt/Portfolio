import { Project } from "@/type/type";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

interface CardProjectProps {
  project: Project;
}

export const CardProject = ({ project }: CardProjectProps) => {
  const { title, thumbnail, description, id } = project;
  return (
    <CardContainer>
      <CardBody>
        <CardItem>{title}</CardItem>
        <CardItem className=" line-clamp-3 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        <CardItem>
          <Image src={thumbnail} alt={thumbnail} width={100} height={100} />
        </CardItem>
        <div>
          <CardItem as={Link} href={`/projects/${id}`}>
            View more detail
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
