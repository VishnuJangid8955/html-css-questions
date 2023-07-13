import "./style.css";

const TableWithGrid = () => {
  return (
    <div className="table">
      <div className="thead">
        <div className="tr">
          <div className="th">Chair</div>
          <div className="th">The Laid Back</div>
          <div className="th">The Worker Bee</div>
          <div className="th">The Chair 4/2</div>
        </div>
      </div>
      <div className="tbody">
        <div className="tr">
          <div className="td">Width</div>
          <div className="td">80 cm</div>
          <div className="td">60 cm</div>
          <div className="td">220 cm</div>
        </div>
        <div className="tr">
          <div className="td">Width</div>
          <div className="td">80 cm</div>
          <div className="td">60 cm</div>
          <div className="td">220 cm</div>
        </div>
        <div className="tr">
          <div className="td">Width</div>
          <div className="td">80 cm</div>
          <div className="td">60 cm</div>
          <div className="td">220 cm</div>
        </div>
        <div className="tr">
          <div className="td">Width</div>
          <div className="td">80 cm</div>
          <div className="td">60 cm</div>
          <div className="td">220 cm</div>
        </div>
      </div>
    </div>
  );
};

export default TableWithGrid;
