export interface NavigationBlockProps {
  link?: string;
  className?: string;
  IconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }>;
}
