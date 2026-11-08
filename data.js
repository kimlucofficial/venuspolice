/* =========================================================
   NỘI DUNG — chỉ cần sửa trong DATA
   ========================================================= */
var DATA = {
  discord: 'https://discord.gg/',
  /* Ban lãnh đạo. discord: ID tài khoản Discord → tự lấy avatar + tên trong server.
     Muốn giữ cố định tên ghi ở đây thì thêm  lockName: true  */
  people: [
    { role: 'Assistant Commissioner', name: 'James Wilson', img: '', discord: '874277324026150913', lockName: true },
    { role: 'Commissioner',           name: 'Phước Amory',  img: '', discord: '946006418773925939', lead: true },
    { role: 'Deputy Commissioner',    name: 'Lebill',       img: '', discord: '520037888180748288' },
    { role: 'Chief Of Police',        name: 'Oc Tieu',      img: '', discord: '872509209693003776' },
    { role: 'Sheriff',                name: 'Johnny Will',  img: '', discord: '1086562058717376542' }
  ],
  /* 02 · High Command — điền name và discord (ID Discord) cho từng người */
  highCommand: [
    { role: 'Assistant Chief',           name: '', img: '', discord: '' },
    { role: 'Deputy Chief of Police',    name: '', img: '', discord: '' },
    { role: 'UnderSheriff',              name: '', img: '', discord: '' },
    { role: 'Deputy Chief of Sheriff',   name: '', img: '', discord: '' }
  ],
  /* 03 · Command — 6 ô: hàng trên Captain, hàng dưới Lieutenant */
  command: [
    { role: 'Captain',    name: '', img: '', discord: '' },
    { role: 'Captain',    name: '', img: '', discord: '' },
    { role: 'Captain',    name: '', img: '', discord: '' },
    { role: 'Lieutenant', name: '', img: '', discord: '' },
    { role: 'Lieutenant', name: '', img: '', discord: '' },
    { role: 'Lieutenant', name: '', img: '', discord: '' }
  ],
  forces: [
    { code: 'SASP', name: 'San Andreas State Police',       range: '800 – 899', img: '' },
    { code: 'LSPD', name: 'Los Santos Police Department',   range: '200 – 299', img: '' },
    { code: 'BCSO', name: "Blaine County Sheriff's Office", range: '300 – 399', img: '' }
  ],
  ladder: [
    { code: 'HHC', title: 'Chỉ Huy Tối Cao', gold: true,
      ranks: ['Commissioner', 'Deputy Commissioner', 'Assistant Commissioner'],
      desc: 'Chánh văn phòng UPD, Ủy viên Cảnh sát, Phó Ủy viên cảnh sát, Trợ lý Ủy viên cảnh sát — người đại diện pháp luật của <b>Cục Cảnh sát Thống nhất</b>.' },
    { code: 'HC', title: 'Chỉ Huy Cấp Cao', gold: true,
      ranks: ['Sheriff', 'Chief of Police', 'Chief SASP', 'Assistant Chief SASP', 'Undersheriff', 'Assistant Chief', 'Deputy Chief', 'Chief Deputy', 'Commander'],
      desc: 'Các cảnh sát Tư lệnh cấp cao nhất thuộc <b>UPD</b>.' },
    { code: 'Command', title: 'Chỉ Huy',
      ranks: ['Captain', 'Lieutenants'],
      desc: 'Các cảnh sát chỉ huy cấp cao thuộc <b>UPD</b>.',
      notes: [ { r: 'Lieutenants', d: 'Bao gồm trưởng các bộ phận, các cảnh sát chỉ huy trực ban và các cảnh sát chỉ huy.' } ] },
    { code: 'Supervisor', title: 'Giám sát',
      ranks: ['Sergeants', 'Corporal'],
      desc: 'Các cảnh sát thành viên chỉ huy, giám sát.',
      notes: [ { r: 'Sergeants', d: 'Các cảnh sát giám sát ca trực.' },
               { r: 'Corporals', d: 'Các cảnh sát đóng vai trò cầu nối của UPD và các cảnh sát tuần tra thường trực.' } ] },
    { code: 'Patrol', title: 'Tuần tra',
      ranks: ['Senior Officer', 'Senior Deputy', 'Officer', 'Deputy', 'Trooper'],
      desc: 'Các cảnh sát thuộc các bộ phận tuần tra.' },
    { code: 'Academy', title: 'Học viện',
      ranks: ['Solo Cadet', 'Cadet'],
      desc: 'Các cảnh sát thuộc quản lý tại <b>Academy</b>.' }
  ],

  /* Số liệu bảng xếp hạng theo ID Discord của sĩ quan.
     Danh sách sĩ quan tự lấy từ role cảnh sát trên Discord; ai chưa có ở đây sẽ tính 0.
     Mẫu:  '123456789012345678': { rank: 'Sergeant', week: [38, 14, 52], month: [142, 51, 198], all: [610, 233, 802] },
     (week / month / all = [giờ trực, bắt giữ, cuộc gọi]) */
  stats: {
  },

  /* Bảng xếp hạng — số liệu từ file lương (vns-1.xlsx).
     week / month / all = [giờ trực, bắt giữ, cuộc gọi]
     Khi web lấy được danh sách Discord, mỗi người được ghép theo callsign, rồi tới tên gần nhất. */
  points: { hours: 10, arrests: 25, calls: 5 },
  officers: [
    { name: 'Phước Amory', cs: 'SASP-877', rank: 'Commissioner', unit: 'SASP', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Tra Da', cs: 'SASP-817', rank: 'Deputy Commissioner', unit: 'SASP', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'James Wilson', cs: 'SASP-888', rank: 'Assistant Commissioner', unit: 'SASP', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Le Bill', cs: 'SASP-800', rank: 'Assistant Commissioner', unit: 'SASP', week: [2, 0, 0], month: [2, 0, 0], all: [2, 0, 0] },
    { name: 'Tra Dao', cs: 'SASP-819', rank: 'Secretary', unit: 'SASP', week: [40, 0, 0], month: [40, 0, 0], all: [40, 0, 0] },
    { name: 'Oc Tieu', cs: 'LSPD-232', rank: 'Chief of Police', unit: 'LSPD', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Eric Amory', cs: 'LSPD-244', rank: 'Assistant Chief', unit: 'LSPD', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Young White', cs: 'LSPD-214', rank: 'Corporal', unit: 'LSPD', week: [24.6, 0, 0], month: [24.6, 0, 0], all: [24.6, 0, 0] },
    { name: 'Jones Xù', cs: 'LSPD-225', rank: 'Corporal', unit: 'LSPD', week: [12.3, 0, 0], month: [12.3, 0, 0], all: [12.3, 0, 0] },
    { name: 'Steven Tuấn', cs: 'LSPD-222', rank: 'Senior Officer', unit: 'LSPD', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Duc Thai', cs: 'LSPD-202', rank: 'Officer', unit: 'LSPD', week: [59.9, 0, 0], month: [59.9, 0, 0], all: [59.9, 0, 0] },
    { name: 'Mr Ti', cs: 'LSPD-234', rank: 'Officer', unit: 'LSPD', week: [47.2, 0, 0], month: [47.2, 0, 0], all: [47.2, 0, 0] },
    { name: 'Đức Đom Đóm', cs: 'LSPD-247', rank: 'Officer', unit: 'LSPD', week: [54.9, 0, 0], month: [54.9, 0, 0], all: [54.9, 0, 0] },
    { name: 'Mango Nie', cs: 'LSPD-200', rank: 'Officer', unit: 'LSPD', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'EnAyTi HT', cs: 'LSPD-201', rank: 'Officer', unit: 'LSPD', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Hí Bá Khí', cs: 'LSPD-203', rank: 'Officer', unit: 'LSPD', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Mr Avjnh', cs: 'LSPD-212', rank: 'Officer', unit: 'LSPD', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Danny Loco', cs: 'LSPD-219', rank: 'Officer', unit: 'LSPD', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Sung Jinwoo', cs: 'LSPD-246', rank: 'Officer', unit: 'LSPD', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Kytis Rijz', cs: 'LSPD-289', rank: 'Officer', unit: 'LSPD', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Cacao Latte', cs: 'LSPD-298', rank: 'Officer', unit: 'LSPD', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Kenji Sullivan', cs: 'BCSO-366', rank: 'Sheriff', unit: 'BCSO', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Pixi Nguyen', cs: 'BCSO-314', rank: 'Chief Deputy', unit: 'BCSO', week: [19, 0, 0], month: [19, 0, 0], all: [19, 0, 0] },
    { name: 'Johnny Đen', cs: 'BCSO-300', rank: 'Lieutenant', unit: 'BCSO', week: [11.8, 0, 0], month: [11.8, 0, 0], all: [11.8, 0, 0] },
    { name: 'Krik Mcan', cs: 'BCSO-333', rank: 'Sergeant', unit: 'BCSO', week: [34.2, 0, 0], month: [34.2, 0, 0], all: [34.2, 0, 0] },
    { name: 'Longmal Baso', cs: 'BCSO-320', rank: 'Senior Deputy', unit: 'BCSO', week: [35.6, 0, 0], month: [35.6, 0, 0], all: [35.6, 0, 0] },
    { name: 'Nira Babii', cs: 'BCSO-322', rank: 'Senior Deputy', unit: 'BCSO', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Puc Puc', cs: 'BCSO-312', rank: 'Deputy', unit: 'BCSO', week: [6.8, 0, 0], month: [6.8, 0, 0], all: [6.8, 0, 0] },
    { name: 'Zayn Zayn', cs: 'BCSO-310', rank: 'Deputy', unit: 'BCSO', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Pu Pico', cs: 'BCSO-303', rank: 'Deputy', unit: 'BCSO', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] },
    { name: 'Benjamin Maxwell', cs: 'BCSO-317', rank: 'Deputy', unit: 'BCSO', week: [0, 0, 0], month: [0, 0, 0], all: [0, 0, 0] }
  ]
};
if (typeof module !== 'undefined') module.exports = DATA;
