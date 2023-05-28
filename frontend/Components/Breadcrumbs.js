const Breadcrumbs = (props) => {
  const linkList = props.links.map((val, idx) => (
    <li key={idx}>
      <a href={val.link}>{val.title}</a>
    </li>
  ));

  return (
    <>
      <nav
        class="breadcrumb has-succeeds-separator is-medium"
        aria-label="breadcrumbs"
      >
        <ul>{linkList}</ul>
      </nav>
    </>
  );
};

export default Breadcrumbs;
