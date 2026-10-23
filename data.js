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
  forces: [
    { code: 'SASP', name: 'San Andreas State Police',       range: '800 – 899', img: '' },
    { code: 'LSPD', name: 'Los Santos Police Department',   range: '200 – 299', img: '' },
    { code: 'BCSO', name: "Blaine County Sheriff's Office", range: '300 – 399', img: '' }
  ],
  ladder: [
    { code: 'HHC', title: 'High High Command', gold: true,
      ranks: ['Commissioner', 'Deputy Commissioner', 'Assistant Commissioner'],
      desc: 'Chánh văn phòng UPD, Ủy viên Cảnh sát, Phó Ủy viên cảnh sát, Trợ lý Ủy viên cảnh sát — người đại diện pháp luật của <b>Cục Cảnh sát Thống nhất</b>.' },
    { code: 'HC', title: 'High Command', gold: true,
      ranks: ['Sheriff', 'Chief of Police', 'Chief SASP', 'Assistant Chief SASP', 'Undersheriff', 'Assistant Chief', 'Deputy Chief', 'Chief Deputy', 'Commander'],
      desc: 'Các cảnh sát Tư lệnh cấp cao nhất thuộc <b>Bộ tư lệnh tối cao</b>.' },
    { code: 'Command', title: 'Bộ tư lệnh',
      ranks: ['Captain', 'Lieutenants'],
      desc: 'Các cảnh sát chỉ huy cấp cao thuộc <b>Bộ tư lệnh</b>.',
      notes: [ { r: 'Lieutenants', d: 'Bao gồm trưởng các bộ phận, các cảnh sát chỉ huy trực ban và các cảnh sát chỉ huy.' } ] },
    { code: 'Supervisor', title: 'Giám sát',
      ranks: ['Sergeants', 'Corporal'],
      desc: 'Các cảnh sát thành viên chỉ huy, giám sát.',
      notes: [ { r: 'Sergeants', d: 'Các cảnh sát giám sát ca trực.' },
               { r: 'Corporals', d: 'Các cảnh sát đóng vai trò cầu nối của Bộ Tư lệnh và các cảnh sát tuần tra thường trực.' } ] },
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

  /* Bảng xếp hạng — DỮ LIỆU MẪU. Thay bằng số liệu thật:
     week / month / all = [giờ trực, bắt giữ, cuộc gọi]; prev = hạng tuần trước */
  points: { hours: 10, arrests: 25, calls: 5 },
  officers: [
    { name: 'Sĩ quan A', cs: 'LSPD-214', rank: 'Sergeant',       unit: 'LSPD', week: [38, 14, 52], month: [142, 51, 198], all: [610, 233, 802] },
    { name: 'Sĩ quan B', cs: 'SASP-812', rank: 'Trooper',        unit: 'SASP', week: [41, 9, 47],  month: [150, 40, 171], all: [588, 190, 744] },
    { name: 'Sĩ quan C', cs: 'BCSO-305', rank: 'Senior Deputy',  unit: 'BCSO', week: [33, 12, 40], month: [128, 46, 166], all: [540, 205, 690] },
    { name: 'Sĩ quan D', cs: 'LSPD-227', rank: 'Officer',        unit: 'LSPD', week: [29, 11, 44], month: [119, 39, 160], all: [431, 151, 602] },
    { name: 'Sĩ quan E', cs: 'SASP-834', rank: 'Corporal',       unit: 'SASP', week: [35, 7, 38],  month: [131, 31, 150], all: [499, 128, 577] },
    { name: 'Sĩ quan F', cs: 'BCSO-318', rank: 'Deputy',         unit: 'BCSO', week: [27, 10, 36], month: [104, 37, 139], all: [388, 140, 520] },
    { name: 'Sĩ quan G', cs: 'LSPD-241', rank: 'Senior Officer', unit: 'LSPD', week: [24, 9, 41],  month: [99, 35, 151],  all: [402, 133, 560] },
    { name: 'Sĩ quan H', cs: 'SASP-851', rank: 'Trooper',        unit: 'SASP', week: [26, 6, 33],  month: [97, 28, 129],  all: [350, 101, 470] },
    { name: 'Sĩ quan I', cs: 'BCSO-322', rank: 'Deputy',         unit: 'BCSO', week: [22, 8, 30],  month: [91, 30, 118],  all: [301, 111, 433] },
    { name: 'Sĩ quan K', cs: 'LSPD-256', rank: 'Officer',        unit: 'LSPD', week: [20, 7, 29],  month: [84, 26, 112],  all: [290, 92, 401] },
    { name: 'Sĩ quan L', cs: 'SASP-866', rank: 'Corporal',       unit: 'SASP', week: [18, 6, 25],  month: [76, 24, 101],  all: [276, 88, 377] },
    { name: 'Sĩ quan M', cs: 'BCSO-339', rank: 'Deputy',         unit: 'BCSO', week: [16, 5, 22],  month: [70, 20, 93],   all: [240, 75, 330] },
    { name: 'Sĩ quan N', cs: 'CADET-604', rank: 'Cadet',         unit: 'LSPD', week: [15, 3, 20],  month: [41, 8, 55],    all: [41, 8, 55] },
    { name: 'Sĩ quan O', cs: 'CADET-611', rank: 'Solo Cadet',    unit: 'SASP', week: [12, 2, 18],  month: [36, 6, 47],    all: [36, 6, 47] }
  ]
};
