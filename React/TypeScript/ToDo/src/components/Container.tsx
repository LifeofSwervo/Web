
/**
 * Container used for all 3 portions of app.
 * @param children - Child elements inside Container declaration (in App.tsx).
 * @param title - Title of the container.
 * @returns  - Returns container boilerplate.
 */
const Container = ({
    children,
    title,
}: {
    children: JSX.Element | JSX.Element[]; // Marks children to be JSX element or array of JSX elements.
    title?: string; // title is an optional string.
}) => {
    return (
      <div className="bg-green-600 p-4 border shadow rounded-md">
        {title && <h2 className="text-xl pb-2 text-white">{title}</h2>}
        <div>{children}</div>
      </div>
    );
};
  
export default Container;