import React, { useEffect, useState } from "react";
import "./dynamicTable.css";

import { AgGridReact } from "ag-grid-react";
const DynamicTable = ({ tableData }) => {
	let tableHeaders;
	const [rowData, setRowData] = useState();
	const [headers, setHeaders] = useState();

	useEffect(() => {
		setData();
	}, [tableData]);

	function setData() {
		tableHeaders = Object.keys(tableData.data[0]).map((header) => ({
			field: header,
			sortable: true,
			filter: true,
		}));
		setHeaders(tableHeaders);
		setRowData(tableData.data);
	}

	return (
		<>
			<section>
				Your table
				<div className='table-container'>
					<div
						className='ag-theme-alpine'
						style={{ height: 400, width: 1200 }}
					>
						<AgGridReact rowData={rowData} columnDefs={headers}></AgGridReact>
					</div>
				</div>
			</section>
		</>
	);
};

export default DynamicTable;
