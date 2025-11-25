import { useState, useRef, useEffect } from "react";
import "./PagesDropdown.css";

export default function Dropdown() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const [selected, setSelected] = useState(Array(pages.length).fill(false));
  const topCheckboxRef = useRef(null);

  const allChecked = selected.every(Boolean);
  const someChecked = selected.some(Boolean) && !allChecked;

  useEffect(() => {
    if (topCheckboxRef.current) {
      topCheckboxRef.current.indeterminate = someChecked;
    }
  }, [someChecked]);

  function handleToggleAll(e) {
    const checked = e.target.checked;
    setSelected(Array(pages.length).fill(checked));
  }

  function toggleIndex(index) {
    setSelected((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  }

  function handleDone() {
    const selectedPages = pages.filter((_, i) => selected[i]);
    console.log("Selected pages:", selectedPages);
  }

  return (
    <div className="dropdown-container">
      <div className="panel-wrap">
        <div className="dropdown-panel" role="region" aria-label="Pages selector">
          {/* Top row */}
          <div className="dropdown-row top-row">
            <span className="row-label">All pages</span>
            <label className="checkbox-wrapper">
              <input
                ref={topCheckboxRef}
                type="checkbox"
                className="native-checkbox"
                checked={allChecked}
                onChange={handleToggleAll}
              />
              <span className="checkbox-custom" />
            </label>
          </div>

          <div className="divider" />

          {/* Page list */}
          <div className="pages-list">
            {pages.map((page, index) => (
              <div key={index} className="page-item">
                <span className="page-label">{page}</span>
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    className="native-checkbox"
                    checked={selected[index]}
                    onChange={() => toggleIndex(index)}
                  />
                  <span className="checkbox-custom" />
                </label>
              </div>
            ))}
          </div>

          <div className="divider" />

          {/* Done button */}
          <button className="done-btn" onClick={handleDone}>Done</button>
        </div>
      </div>
    </div>
  );
}
