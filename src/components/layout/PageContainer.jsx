function PageContainer({ children }) {
  return (
    <main
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "24px",
        boxSizing: "border-box"
      }}
    >
      {children}
    </main>
  );
}

export default PageContainer;
