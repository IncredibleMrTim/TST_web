interface PageWrapperProps {
  children: React.ReactNode;
}
export const PageWrapper = (props: PageWrapperProps) => (
  <div className="page-wrapper">{props.children}</div>
);
