const SideBarLinks = ({ closeSideBar }) => {
    return (
      <>
        <NavLink to="/#about" onClick={closeSideBar}>
          About
        </NavLink>
      </>
    )
}  