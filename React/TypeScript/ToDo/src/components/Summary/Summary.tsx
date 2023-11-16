import SummaryItem from "./SummaryItem"

const Summary = () => {
    return (
        <>
          <div className="flex justify-between">
            <SummaryItem itemName={"Total"} itemValue={3} />
            <SummaryItem itemName={"To Do"} itemValue={2} />
            <SummaryItem itemName={"Done"} itemValue={1} />
          </div>
        </>
    );
};

export default Summary