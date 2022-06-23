import Search from './Search';

export default () => {
  return <div className="header-tools">
    <ul>
      <li className="header-tools__search header-tools__item">
        <Search />
      </li>
    </ul>
  </div>
}