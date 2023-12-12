import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import axios from "axios";

export default function ExcelExport() {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  async function exportToCSV() {
    //Api
    await axios
      .get("http://localhost:3000/api/excel/get/6574b8f15ea10b9c5154b662")
      .then((result) => {
        const file = result.data.map((res) => ({
          Email: res.email,
          Followers: res.followers,
          Engagements: res.engagements,
          "Course Price": res.coursePrice,
          "Agency Fee": res.agencyFee,
          "Net Revenue": res.netRevenue,
          Date: res.createdAt,
        }));

        const ws = XLSX.utils.json_to_sheet(file);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, "Elitegnosis Simulator Data" + fileExtension);
      })
      .catch((err) => console.log(err));
  }
  return (
    <button
      className="text-white items-center bg-[#6e6fc3] mx-auto px-14 py-4 text-lg"
      onClick={(e) => exportToCSV()}
    >
      Download
    </button>
  );
}
