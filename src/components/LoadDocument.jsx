import { parse } from "papaparse";
import React, { useState } from "react";
import DynamicTable from "./DynamicTable";

import "./loadDocument.css";

const LoadDocument = ({ rowData, columnDefs }) => {
	const [highlighted, setHighlighted] = useState(false);
	const [tableData, setTableData] = useState();


	function handleDocumentDrop(e) {
		e.preventDefault();
		Array.from(e.dataTransfer.files)
		.filter((file) => file.type === "text/csv")
		.forEach(async(file) => {
			const text = await file.text();
			const result = parse(text, {header: true});
			console.log(result)
			setTableData(result)
		})
		setHighlighted(false)

		
	}

	return (
		<>
			<h1>Upload a document</h1>
				<div className="container">
					<div
						className={`drop-zone ${highlighted ? "drop-zone-ready" : ""}`}
						onDragOver={(e) => e.preventDefault()}
						onDragEnter={() => setHighlighted(true)}
						onDragLeave={() => setHighlighted(false)}
						onDrop={(e) => handleDocumentDrop(e)}
					>
						Drop here
					</div>
				</div>
			{tableData && <DynamicTable tableData={tableData}></DynamicTable>}
		</>
	);
};

export default LoadDocument;
