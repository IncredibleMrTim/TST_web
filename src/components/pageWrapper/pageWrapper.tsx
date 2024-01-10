interface PageWrapperProps {
  children: React.ReactNode;
}
export const PageWrapper = (props: PageWrapperProps) => (
  <div className="mx-32 mt-10  h-auto">{props.children}</div>
);
