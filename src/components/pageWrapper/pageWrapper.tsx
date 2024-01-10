interface PageWrapperProps {
  children: React.ReactNode;
}
export const PageWrapper = (props: PageWrapperProps) => (
  <div className="xsm:mx-4 xsm:mt-3 md:mx-32 mt-10 overflow-scroll h-screen">
    {props.children}
  </div>
);
