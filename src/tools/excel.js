import XLSX from 'xlsx'
// import { utils, write, WorkBook } from 'xlsx';
import { saveAs } from 'file-saver'

// 导入==>返回数据以及文件名
export function ExcelIn (e, callback) {
  var reader = new FileReader()
  reader.readAsBinaryString(e.target.files[0])
  reader.onload = function (file) {
    var wb = XLSX.read(file.target.result, { type: 'binary' })
    var data = {}
    for (var i = 0; i < wb.SheetNames.length; i++) {
      let name = wb.SheetNames[i]
      data[name] = XLSX.utils.sheet_to_json(wb.Sheets[name])
    }
    let _name = e.target.value

    var obj = { fileName: _name.substring(_name.lastIndexOf('\\') + 1), fileData: data }
    return callback && callback(obj)
  }
}

/**
 * export excel file
 * @param data:Array
 * @param file_name:String
 * @param fn:js callback function
 * @param _excel_cell_width:Arra,demo:[{'index':0,'width':160},{'index':1,'width':300}] index:excel列索引,width:对应列宽度
 */
export function ExcelOut (data, fileName, sheetName, excelCellWidth) {
  excelCellWidth = excelCellWidth || []
  var ws = {
    s: { '!row': [{wpx: 67}] }
  }
  ws['!cols'] = []
  for (var n = 0; n !== data[0].length; ++n) {
    ws['!cols'].push({wpx: 70})
    for (var _i = 0; _i !== excelCellWidth.length; _i++) {
      if (n === excelCellWidth[_i].index) {
        ws['!cols'][n]['wpx'] = excelCellWidth[_i].width
      }
    }
  }
  data = data || []
  var wsName = sheetName || fileName
  function datenum (v, date1904) {
    if (date1904) v += 1462
    var epoch = Date.parse(v)
    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000)
  }

  function sheetFromArrayOfArrays (data, opts) {
    var ws = {}
    var range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } }
    for (var R = 0; R !== data.length; ++R) {
      for (var C = 0; C !== data[R].length; ++C) {
        if (range.s.r > R) range.s.r = R
        if (range.s.c > C) range.s.c = C
        if (range.e.r < R) range.e.r = R
        if (range.e.c < C) range.e.c = C
        var cell = { v: data[R][C] }
        if (cell.v == null) continue
        var cellRef = XLSX.utils.encode_cell({ c: C, r: R })
        if (typeof cell.v === 'number') cell.t = 'n'
        else if (typeof cell.v === 'boolean') cell.t = 'b'
        else if (cell.v instanceof Date) {
          cell.t = 'n'; cell.z = XLSX.SSF._table[14]
          cell.v = datenum(cell.v)
        } else cell.t = 's'
        ws[cellRef] = cell
      }
    }
    if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range)
    return ws
  }

  function Workbook () {
    if (!(this instanceof Workbook)) return new Workbook()
    this.SheetNames = []
    this.Sheets = {}
  }

  var wb = new Workbook()
  ws = sheetFromArrayOfArrays(data)

  /* add worksheet to workbook */
  wb.SheetNames.push(wsName)
  wb.Sheets[wsName] = ws
  var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' })

  function s2ab (s) {
    var buf = new ArrayBuffer(s.length)
    var view = new Uint8Array(buf)
    for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
    return buf
  }
  saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), fileName + '.xlsx')
}

// module.exports = {
//     ExcelIn,
//     ExcelOut
// }
