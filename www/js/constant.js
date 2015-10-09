﻿angular.module('starter')

.constant('AUTH_EVENTS', {
    authenticated: 'authenticated',
    logout: 'logout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
})

.constant('NETWORK_EVENTS', {
    nointernet: 'nointernet'
})

.constant('STORAGE_KEYS', {
    list_dealers : 'AncoListDealersKey',
    token_key : 'AncoTokenKey',
    user_key : 'AncoUserKey'
})

.constant('USER_ROLES', {
    admin: 'admin_role',
    public: 'public_role'
})

.constant('NETWORK', {
    // BASE_URL: 'http://192.168.1.69:1337'
     BASE_URL: 'http://survey-anco.rhcloud.com'
    //BASE_URL: 'http://localhost:1337'
})

.constant('REGIONS', [
                        {id:100, name: 'MIỀN TÂY'},
                        {id:101, name: 'MIỀN ĐÔNG & HCM'},
                        {id:102, name: 'MIỀN TRUNG & CAO NGUYÊN'},
                        {id:103, name: 'NAM SÔNG HỒNG'},
                        {id:104, name: 'BẮC SÔNG HỒNG'},
                     ]
)

.constant('USERS', [
                        {id:1, name:"Bùi Thành Mến", AC_PC:0, region:100},
						{id:2, name:"Bùi Văn Được", AC_PC:0, region:100},
						{id:3, name:"Bùi Văn Lực", AC_PC:0, region:100},
						{id:4, name:"Cao Văn Chinh", AC_PC:0, region:100},
						{id:5, name:"Châu Văn Tiến", AC_PC:0, region:100},
						{id:6, name:"Đặng Hoài Ngân", AC_PC:0, region:100},
						{id:7, name:"Đặng Nguyễn Trường Giang", AC_PC:0, region:100},
						{id:8, name:"Đoàn Quốc Vân", AC_PC:0, region:100},
						{id:9, name:"Dương Quốc Kha", AC_PC:0, region:100},
						{id:10, name:"Dương Quốc Thống", AC_PC:0, region:100},
						{id:11, name:"Dương Thái Dương", AC_PC:0, region:100},
						{id:12, name:"Hồ Chí Công", AC_PC:0, region:100},
						{id:13, name:"Huỳnh Duy Tân", AC_PC:0, region:100},
						{id:14, name:"Huỳnh Minh Triết", AC_PC:0, region:100},
						{id:15, name:"Huỳnh Quang Toàn", AC_PC:0, region:100},
						{id:16, name:"Huỳnh Tấn Sĩ", AC_PC:0, region:100},
						{id:17, name:"Huỳnh Tấn Tài", AC_PC:0, region:100},
						{id:18, name:"Huỳnh Yến Ngân", AC_PC:0, region:100},
						{id:19, name:"Kim Sơn", AC_PC:0, region:100},
						{id:20, name:"Lâm Hoàng Việt", AC_PC:0, region:100},
						{id:21, name:"Lê Đức Tài", AC_PC:0, region:100},
						{id:22, name:"Lê Phi Sơn", AC_PC:0, region:100},
						{id:23, name:"Lê Quốc Duyệt", AC_PC:0, region:100},
						{id:24, name:"Lê Tấn Hiếu", AC_PC:0, region:100},
						{id:25, name:"Lê Thanh Sang", AC_PC:0, region:100},
						{id:26, name:"Lê Văn Bé Lớn", AC_PC:0, region:100},
						{id:27, name:"Lê Văn To", AC_PC:0, region:100},
						{id:28, name:"Lục Minh Mẫn", AC_PC:0, region:100},
						{id:29, name:"Mai Dương Hùng Huy", AC_PC:0, region:100},
						{id:30, name:"Ngô Phúc Toàn", AC_PC:0, region:100},
						{id:31, name:"Nguyễn Bá Qui", AC_PC:0, region:100},
						{id:32, name:"Nguyễn Chánh Lễ", AC_PC:0, region:100},
						{id:33, name:"Nguyễn Hồ Nhật Quang", AC_PC:0, region:100},
						{id:34, name:"Nguyễn Hồng Sơn", AC_PC:0, region:100},
						{id:35, name:"Nguyễn Hữu Tâm", AC_PC:0, region:100},
						{id:36, name:"Nguyễn Lê Hòa", AC_PC:0, region:100},
						{id:37, name:"Nguyễn Long Sơn", AC_PC:0, region:100},
						{id:38, name:"Nguyễn Minh Hội", AC_PC:0, region:100},
						{id:39, name:"Nguyễn Minh Sơn", AC_PC:0, region:100},
						{id:40, name:"Nguyễn Nhựt Trường", AC_PC:0, region:100},
						{id:41, name:"Nguyễn Phước Hiểu", AC_PC:0, region:100},
						{id:42, name:"Nguyễn Quốc Thống", AC_PC:0, region:100},
						{id:43, name:"Nguyễn Tấn Duy", AC_PC:0, region:100},
						{id:44, name:"Nguyễn Thanh Phát", AC_PC:0, region:100},
						{id:45, name:"Nguyễn Thành Trung", AC_PC:0, region:100},
						{id:46, name:"Nguyễn Thế Vinh", AC_PC:0, region:100},
						{id:47, name:"Nguyễn Thiện Cầm", AC_PC:0, region:100},
						{id:48, name:"Nguyễn Thông Thái", AC_PC:0, region:100},
						{id:49, name:"Nguyễn Trần Khắc Vũ", AC_PC:0, region:100},
						{id:50, name:"Nguyễn Trường An", AC_PC:0, region:100},
						{id:51, name:"Nguyễn Tuấn Kiệt", AC_PC:0, region:100},
						{id:52, name:"Nguyễn Tường Phi", AC_PC:0, region:100},
						{id:53, name:"Nguyễn Văn Giàu", AC_PC:0, region:100},
						{id:54, name:"Nguyễn Văn Hận", AC_PC:0, region:100},
						{id:55, name:"Nguyễn Văn Khăm", AC_PC:0, region:100},
						{id:56, name:"Nguyễn Văn Tạo", AC_PC:0, region:100},
						{id:57, name:"Nguyễn Văn Trọng", AC_PC:0, region:100},
						{id:58, name:"Nguyễn Văn Tuấn", AC_PC:0, region:100},
						{id:59, name:"Nguyễn Văn Tuyến", AC_PC:0, region:100},
						{id:60, name:"Nguyễn Văn Vũ", AC_PC:0, region:100},
						{id:61, name:"Nguyễn Việt Anh", AC_PC:0, region:100},
						{id:62, name:"Nguyễn Việt Đoàn", AC_PC:0, region:100},
						{id:63, name:"Nguyễn Vũ Linh", AC_PC:0, region:100},
						{id:64, name:"Ông Thanh Sơn", AC_PC:0, region:100},
						{id:65, name:"Phạm Hoàng Sỉ", AC_PC:0, region:100},
						{id:66, name:"Phan Hoài Nhân", AC_PC:0, region:100},
						{id:67, name:"Quách Thành Lộc", AC_PC:0, region:100},
						{id:68, name:"Tạ Minh Lộc Đức", AC_PC:0, region:100},
						{id:69, name:"Tống Tấn Nghĩa", AC_PC:0, region:100},
						{id:70, name:"Trần Duy Bằng", AC_PC:0, region:100},
						{id:71, name:"Trần Hoàng Đức", AC_PC:0, region:100},
						{id:72, name:"Trần Hoàng Thám", AC_PC:0, region:100},
						{id:73, name:"Trần Hoàng Thưng", AC_PC:0, region:100},
						{id:74, name:"Trần Khánh Minh", AC_PC:0, region:100},
						{id:75, name:"Trần Quốc Thái", AC_PC:0, region:100},
						{id:76, name:"Trần Thanh Em", AC_PC:0, region:100},
						{id:77, name:"Trần Thanh Sơn", AC_PC:0, region:100},
						{id:78, name:"Trần Trọng Đảm", AC_PC:0, region:100},
						{id:79, name:"Trần Văn Ô", AC_PC:0, region:100},
						{id:80, name:"Trần Văn Toàn", AC_PC:0, region:100},
						{id:81, name:"Trương Minh Mẫn", AC_PC:0, region:100},
						{id:82, name:"Võ Anh Khoa", AC_PC:0, region:100},
						{id:83, name:"Võ Duy Tín", AC_PC:0, region:100},
						{id:84, name:"Võ Trung Nhân", AC_PC:0, region:100},
						{id:85, name:"Võ Văn Tiến", AC_PC:0, region:100},
						{id:86, name:"Vương Thanh Nhẫn", AC_PC:0, region:100},
						{id:87, name:"Bùi Thanh Tuấn", AC_PC:0, region:101},
						{id:88, name:"Đặng Văn Chung", AC_PC:0, region:101},
						{id:89, name:"ĐỖ THỊ TUYẾT TRINH", AC_PC:0, region:101},
						{id:90, name:"Đoàn Công Tuấn", AC_PC:0, region:101},
						{id:91, name:"ĐOÀN DUY THANH", AC_PC:0, region:101},
						{id:92, name:"Đoàn Nhật Trường", AC_PC:0, region:101},
						{id:93, name:"Dương Trần Quang Chẩn", AC_PC:0, region:101},
						{id:94, name:"HENG IER HANG", AC_PC:0, region:101},
						{id:95, name:"HỒ CHÍ HOAN", AC_PC:0, region:101},
						{id:96, name:"Hồ Văn Trường Chinh", AC_PC:0, region:101},
						{id:97, name:"HOÀNG CAO QUÝ", AC_PC:0, region:101},
						{id:98, name:"HOÀNG THANH BÌNH", AC_PC:0, region:101},
						{id:99, name:"LÊ CHÍ THANH", AC_PC:0, region:101},
						{id:100, name:"LÊ PHẠM XUÂN HẢI", AC_PC:0, region:101},
						{id:101, name:"LÊ THỊ MAI", AC_PC:0, region:101},
						{id:102, name:"Lê Tuấn Vũ", AC_PC:0, region:101},
						{id:103, name:"Lư Hoàng Anh", AC_PC:0, region:101},
						{id:104, name:"LƯƠNG VĂN LÃNH", AC_PC:0, region:101},
						{id:105, name:"Lý Thịnh Phục", AC_PC:0, region:101},
						{id:106, name:"Nguyễn Chí Hiếu", AC_PC:0, region:101},
						{id:107, name:"NGUYỄN CÔNG DANH", AC_PC:0, region:101},
						{id:108, name:"Nguyễn Đình Khang", AC_PC:0, region:101},
						{id:109, name:"NGUYỄN ĐÌNH LƯƠNG", AC_PC:0, region:101},
						{id:110, name:"NGUYỄN ĐÌNH VỸ", AC_PC:0, region:101},
						{id:111, name:"NGUYỄN ĐỨC HIẾU", AC_PC:0, region:101},
						{id:112, name:"Nguyễn Ngọc Việt", AC_PC:0, region:101},
						{id:113, name:"NGUYỄN QUỐC ĐẠT", AC_PC:0, region:101},
						{id:114, name:"NGUYỄN TẤN ĐỨC", AC_PC:0, region:101},
						{id:115, name:"NGUYỄN THANH VÂN", AC_PC:0, region:101},
						{id:116, name:"NGUYỄN THỊ HƯƠNG", AC_PC:0, region:101},
						{id:117, name:"NGUYỄN TRUNG NHẬT", AC_PC:0, region:101},
						{id:118, name:"NGUYỄN VĂN BẰNG", AC_PC:0, region:101},
						{id:119, name:"NGUYỄN VĂN CƯỜNG", AC_PC:0, region:101},
						{id:120, name:"Nguyễn Văn Dào", AC_PC:0, region:101},
						{id:121, name:"NGUYỄN VĂN TRUNG ", AC_PC:0, region:101},
						{id:122, name:"PHẠM MINH TRÍ", AC_PC:0, region:101},
						{id:123, name:"PHẠM THỊ BÍCH TRANG", AC_PC:0, region:101},
						{id:124, name:"PHẠM THỊ NHỚ", AC_PC:0, region:101},
						{id:125, name:"Phan Huỳnh Trung", AC_PC:0, region:101},
						{id:126, name:"PHAN TRƯỜNG PHI", AC_PC:0, region:101},
						{id:127, name:"Trần Anh Tiến", AC_PC:0, region:101},
						{id:128, name:"TRẦN QUỐC THANH", AC_PC:0, region:101},
						{id:129, name:"Trần Thanh Tâm", AC_PC:0, region:101},
						{id:130, name:"TRẦN VĂN PHÚ", AC_PC:0, region:101},
						{id:131, name:"TRƯƠNG MẠNH HÙNG", AC_PC:0, region:101},
						{id:132, name:"TRƯƠNG QUỐC HIẾU", AC_PC:0, region:101},
						{id:133, name:"VÕ VĂN ĐẠT", AC_PC:0, region:101},
						{id:134, name:"Võ Văn Khắp", AC_PC:0, region:101},
						{id:135, name:"VŨ DUY HƯNG", AC_PC:0, region:101},
						{id:136, name:"Bùi Đức Hậu", AC_PC:0, region:103},
						{id:137, name:"Bùi Đức Vụ", AC_PC:0, region:103},
						{id:138, name:"Bùi Ngọc Hưng", AC_PC:0, region:103},
						{id:139, name:"Cao Văn Mạnh", AC_PC:0, region:103},
						{id:140, name:"Cù văn Long", AC_PC:0, region:103},
						{id:141, name:"Đặng Ngọc Chúc", AC_PC:0, region:103},
						{id:142, name:"Đào Văn Thuận", AC_PC:0, region:103},
						{id:143, name:"Đỗ Ngọc Thức", AC_PC:0, region:103},
						{id:144, name:"Đỗ Trọng Quân", AC_PC:0, region:103},
						{id:145, name:"Hà Văn Dũng", AC_PC:0, region:103},
						{id:146, name:"Hồ Bảo Dũng", AC_PC:0, region:103},
						{id:147, name:"Hoàng Công Thành", AC_PC:0, region:103},
						{id:148, name:"Hoàng Mạnh Hùng", AC_PC:0, region:103},
						{id:149, name:"Hoàng Trọng Tiến", AC_PC:0, region:103},
						{id:150, name:"Hoàng Văn Minh", AC_PC:0, region:103},
						{id:151, name:"Lại Thế Ánh", AC_PC:0, region:103},
						{id:152, name:"Lê Văn Trung", AC_PC:0, region:103},
						{id:153, name:"Lô Văn Chung", AC_PC:0, region:103},
						{id:154, name:"Lương Đại Hải", AC_PC:0, region:103},
						{id:155, name:"Lương Quang Thiện", AC_PC:0, region:103},
						{id:156, name:"Mai Sỹ Toản", AC_PC:0, region:103},
						{id:157, name:"Ngọ Văn Lương", AC_PC:0, region:103},
						{id:158, name:"Nguyễn Anh Ngọc", AC_PC:0, region:103},
						{id:159, name:"Nguyễn Đình Toản", AC_PC:0, region:103},
						{id:160, name:"Nguyễn Ngọc Tuyến", AC_PC:0, region:103},
						{id:161, name:"Nguyễn Phạm Hoàng Duy", AC_PC:0, region:103},
						{id:162, name:"Nguyễn Phi Giáp", AC_PC:0, region:103},
						{id:163, name:"Nguyễn Sơn Hải", AC_PC:0, region:103},
						{id:164, name:"Nguyễn Thanh Hải", AC_PC:0, region:103},
						{id:165, name:"Nguyễn Thành Long", AC_PC:0, region:103},
						{id:166, name:"Nguyễn Tiến Giảng", AC_PC:0, region:103},
						{id:167, name:"Nguyễn Tiến Lương (A)", AC_PC:0, region:103},
						{id:168, name:"Nguyễn Tiến Lương (B)", AC_PC:0, region:103},
						{id:169, name:"Nguyễn Viết Tân", AC_PC:0, region:103},
						{id:170, name:"Nguyễn Xuân Tự", AC_PC:0, region:103},
						{id:171, name:"Phạm Đình Chiến", AC_PC:0, region:103},
						{id:172, name:"Phạm Hữu Quang", AC_PC:0, region:103},
						{id:173, name:"Phạm Văn Hiến", AC_PC:0, region:103},
						{id:174, name:"Phạm Văn Hùng", AC_PC:0, region:103},
						{id:175, name:"Phạm Xuân Trí", AC_PC:0, region:103},
						{id:176, name:"Phan Thạch Việt ", AC_PC:0, region:103},
						{id:177, name:"Phan Thanh Vũ", AC_PC:0, region:103},
						{id:178, name:"Phan Văn Trang", AC_PC:0, region:103},
						{id:179, name:"Trần Duy Hưng", AC_PC:0, region:103},
						{id:180, name:"Trần Hoàng Nhật (A)", AC_PC:0, region:103},
						{id:181, name:"Trần Hoàng Nhật (B)", AC_PC:0, region:103},
						{id:182, name:"Trần Quốc Đãi", AC_PC:0, region:103},
						{id:183, name:"Trần Tiến", AC_PC:0, region:103},
						{id:184, name:"Trịnh Văn Ninh", AC_PC:0, region:103},
						{id:185, name:"Trương Văn Hoà", AC_PC:0, region:103},
						{id:186, name:"Trương Văn Hoòa", AC_PC:0, region:103},
						{id:187, name:"Vũ Ngọc Sơn (A)", AC_PC:0, region:103},
						{id:188, name:"Vũ Ngọc Sơn (B)", AC_PC:0, region:103},
						{id:189, name:"Vũ Văn Trọng", AC_PC:0, region:103},
						{id:190, name:"Bùi Thế Duy", AC_PC:0, region:104},
						{id:191, name:"Bùi Văn Sự", AC_PC:0, region:104},
						{id:192, name:"Cao Đức Hùng", AC_PC:0, region:104},
						{id:193, name:"Đặng Đình Long ", AC_PC:0, region:104},
						{id:194, name:"Đào Duy Quang", AC_PC:0, region:104},
						{id:195, name:"Đào Việt Hùng", AC_PC:0, region:104},
						{id:196, name:"Đinh Văn Giang", AC_PC:0, region:104},
						{id:197, name:"Đỗ Quang Thưởng", AC_PC:0, region:104},
						{id:198, name:"Dương Văn Quang", AC_PC:0, region:104},
						{id:199, name:"Giáp Trọng Đại", AC_PC:0, region:104},
						{id:200, name:"Hoàng Trung Thực ", AC_PC:0, region:104},
						{id:201, name:"Lê Đức Tùng", AC_PC:0, region:104},
						{id:202, name:"Lê Văn Tài", AC_PC:0, region:104},
						{id:203, name:"Lương Xuân Mỹ", AC_PC:0, region:104},
						{id:204, name:"Nguyễn danh Việt", AC_PC:0, region:104},
						{id:205, name:"Nguyễn Hữu Hiệp", AC_PC:0, region:104},
						{id:206, name:"Nguyễn mạnh Hùng", AC_PC:0, region:104},
						{id:207, name:"Nguyễn Minh Quang", AC_PC:0, region:104},
						{id:208, name:"Nguyễn Tiến Luận", AC_PC:0, region:104},
						{id:209, name:"Nguyễn Tuấn Linh", AC_PC:0, region:104},
						{id:210, name:"Nguyễn văn Hải", AC_PC:0, region:104},
						{id:211, name:"Nguyễn văn Hùng", AC_PC:0, region:104},
						{id:212, name:"Nguyễn Văn Huy", AC_PC:0, region:104},
						{id:213, name:"Nguyễn Văn Thuỳ", AC_PC:0, region:104},
						{id:214, name:"Nguyễn Văn Trung", AC_PC:0, region:104},
						{id:215, name:"Nguyễn Văn Tuấn", AC_PC:0, region:104},
						{id:216, name:"Nguyễn văn Uyên", AC_PC:0, region:104},
						{id:217, name:"Nguyễn Văn Võ", AC_PC:0, region:104},
						{id:218, name:"Nguyễn Vũ Long", AC_PC:0, region:104},
						{id:219, name:"Phạm Đình Linh", AC_PC:0, region:104},
						{id:220, name:"Phạm Ngọc Tuấn", AC_PC:0, region:104},
						{id:221, name:"Phạm Thế Quyền", AC_PC:0, region:104},
						{id:222, name:"Phạm Tùng Lâm", AC_PC:0, region:104},
						{id:223, name:"Phan Văn Cường", AC_PC:0, region:104},
						{id:224, name:"Tạ quang Quyến", AC_PC:0, region:104},
						{id:225, name:"Tạ văn Cường", AC_PC:0, region:104},
						{id:226, name:"Trần Danh Thanh", AC_PC:0, region:104},
						{id:227, name:"Trần Văn Bắc", AC_PC:0, region:104},
						{id:228, name:"Trần Văn Toàn", AC_PC:0, region:104},
						{id:229, name:"Trịnh Ngọc Thắng", AC_PC:0, region:104},
						{id:230, name:"Trịnh Văn Ngọc", AC_PC:0, region:104},
						{id:231, name:"Trương Văn Đồng", AC_PC:0, region:104},
						{id:232, name:"vũ Văn Tuấn", AC_PC:0, region:104},
						{id:233, name:"BÙI VĂN QUANG", AC_PC:0, region:102},
						{id:234, name:"BÙI VĂN QUANG B", AC_PC:0, region:102},
						{id:235, name:"CAO VĂN THÁI", AC_PC:0, region:102},
						{id:236, name:"HÔ NGỌC THÂN", AC_PC:0, region:102},
						{id:237, name:"HOÀNG NHƯ NGUYỆN", AC_PC:0, region:102},
						{id:238, name:"HUỲNH VĂN LỢI", AC_PC:0, region:102},
						{id:239, name:"LÊ ĐỨC ANH", AC_PC:0, region:102},
						{id:240, name:"LÊ HOÀNG THIÊN", AC_PC:0, region:102},
						{id:241, name:"LƯƠNG VĂN THÔNG", AC_PC:0, region:102},
						{id:242, name:"MAI QUỐC ĐIỆP", AC_PC:0, region:102},
						{id:243, name:"MAI VĂN CƯỜNG", AC_PC:0, region:102},
						{id:244, name:"NGUYỄN ANH BA", AC_PC:0, region:102},
						{id:245, name:"NGUYỄN BẢO QUỐC", AC_PC:0, region:102},
						{id:246, name:"NGUYỄN HỒNG THỎA", AC_PC:0, region:102},
						{id:247, name:"NGUYỄN HỒNG VIỆT", AC_PC:0, region:102},
						{id:248, name:"NGUYỄN KHẮC ĐẢM", AC_PC:0, region:102},
						{id:249, name:"NGUYỄN MINH NIN", AC_PC:0, region:102},
						{id:250, name:"NGUYỄN MINH THẮNG", AC_PC:0, region:102},
						{id:251, name:"NGUYỄN NGỌC DUY", AC_PC:0, region:102},
						{id:252, name:"NGUYỄN THÀNH TÊ", AC_PC:0, region:102},
						{id:253, name:"NGUYỄN ỮNG", AC_PC:0, region:102},
						{id:254, name:"NGUYỄN VĂN MÃO", AC_PC:0, region:102},
						{id:255, name:"NGUYỄN VĂN TRƯỜNG", AC_PC:0, region:102},
						{id:256, name:"PHẠM CÔNG ĐỨC", AC_PC:0, region:102},
						{id:257, name:"TẠ ĐỨC ĐỊNH", AC_PC:0, region:102},
						{id:258, name:"TRẦN QUỐC TÀI", AC_PC:0, region:102},
						{id:259, name:"TRẦN QUỐC TOÀN", AC_PC:0, region:102},
						{id:260, name:"TRẦN VÂN NAM", AC_PC:0, region:102},
						{id:261, name:"TRẦN VĂN TUẤN", AC_PC:0, region:102},
						{id:262, name:"TRƯƠNG HOÀI THANH", AC_PC:0, region:102},
						{id:263, name:"TRƯƠNG HOÀNG DIỆU", AC_PC:0, region:102},
						{id:264, name:"VÕ QUANG ÁNH", AC_PC:0, region:102},
						{id:265, name:"VŨ ĐÌNH HUẤN", AC_PC:0, region:102},
						{id:266, name:"Nguyễn Ngọc Hiệp", AC_PC:1, region:100},
						{id:267, name:"Phạm Ngọc Đức", AC_PC:1, region:100},
						{id:268, name:"Nguyễn Thanh Phát", AC_PC:1, region:100},
						{id:269, name:"Lương Phúc Vinh", AC_PC:1, region:100},
						{id:270, name:"Nguyễn Ngọc Báu", AC_PC:1, region:100},
						{id:271, name:"Trần Văn Vô", AC_PC:1, region:100},
						{id:272, name:"Nguyễn Trung Trực", AC_PC:1, region:100},
						{id:273, name:"Cao Văn Nhân", AC_PC:1, region:100},
						{id:274, name:"Nguyễn Thế Duy", AC_PC:1, region:100},
						{id:275, name:"Phan Lê Minh Thông", AC_PC:1, region:100},
						{id:276, name:"Vương Kim Thuận", AC_PC:1, region:100},
						{id:277, name:"Phạm Nam Hải", AC_PC:1, region:100},
						{id:278, name:"Phạm Cao Duy", AC_PC:1, region:100},
						{id:279, name:"Đinh Trường Sinh", AC_PC:1, region:100},
						{id:280, name:"Bùi Quốc Vũ", AC_PC:1, region:100},
						{id:281, name:"Nguyễn Thị Như", AC_PC:1, region:100},
						{id:282, name:"Nguyễn Văn Thân", AC_PC:1, region:100},
						{id:283, name:"Nguyễn Hoàng Nhân", AC_PC:1, region:100},
						{id:284, name:"Lê Quang Phương", AC_PC:1, region:100},
						{id:285, name:"Phạm Tấn Tùng", AC_PC:1, region:100},
						{id:286, name:"Nguyễn Hoàng Anh", AC_PC:1, region:100},
						{id:287, name:"Huỳnh Phú Lâm", AC_PC:1, region:100},
						{id:288, name:"Nguyễn Hoàng Tuấn Cường", AC_PC:1, region:100},
						{id:289, name:"Trần Minh Suốt", AC_PC:1, region:100},
						{id:290, name:"Đặng Thanh Bình", AC_PC:1, region:100},
						{id:291, name:"Nguyễn Minh Luân", AC_PC:1, region:100},
						{id:292, name:"Lê Văn Đẹp", AC_PC:1, region:100},
						{id:293, name:"Nguyễn Hoàng Linh", AC_PC:1, region:100},
						{id:294, name:"Nguyễn Văn Lăng", AC_PC:1, region:100},
						{id:295, name:"Phạm Châu Minh Nhựt", AC_PC:1, region:100},
						{id:296, name:"Trần Anh Kiệt", AC_PC:1, region:100},
						{id:297, name:"Nguyễn Văn Thông", AC_PC:1, region:100},
						{id:298, name:"Phạm Navy", AC_PC:1, region:100},
						{id:299, name:"Trần Thanh Nhàn", AC_PC:1, region:100},
						{id:300, name:"Trần Duy Khoa", AC_PC:1, region:100},
						{id:301, name:"Phạm Văn Hồng Phúc Em", AC_PC:1, region:100},
						{id:302, name:"Trần Thế", AC_PC:1, region:100},
						{id:303, name:"Ngô Thanh Minh", AC_PC:1, region:100},
						{id:304, name:"Huỳnh Đăng Thắng", AC_PC:1, region:100},
						{id:305, name:"Dương Thanh Việt", AC_PC:1, region:100},
						{id:306, name:"Tống Hồng Đạt", AC_PC:1, region:100},
						{id:307, name:"Lê Văn Hùng", AC_PC:1, region:101},
						{id:308, name:"Đào Thanh Trúc", AC_PC:1, region:101},
						{id:309, name:"Nguyễn Quốc Đạt", AC_PC:1, region:101},
						{id:310, name:"Trần Văn Huyền", AC_PC:1, region:101},
						{id:311, name:"Vũ Trọng Hướng", AC_PC:1, region:101},
						{id:312, name:"Trần Thanh Tùng", AC_PC:1, region:101},
						{id:313, name:"Lê Ngọc Thân", AC_PC:1, region:101},
						{id:314, name:"Nguyễn Trung Kiên", AC_PC:1, region:101},
						{id:315, name:"Phạm Đức Cương ", AC_PC:1, region:101},
						{id:316, name:"Phạm Quang Tuyên", AC_PC:1, region:101},
						{id:317, name:"Ng Tô Xuân Phong ", AC_PC:1, region:101},
						{id:318, name:"Phan Nhật Tâm", AC_PC:1, region:101},
						{id:319, name:"Nguyễn Văn Tuân", AC_PC:1, region:101},
						{id:320, name:"Vũ Đức Giỏi", AC_PC:1, region:101},
						{id:321, name:"Đặng Trung Hiếu ", AC_PC:1, region:101},
						{id:322, name:"Lý Công Huỳnh ", AC_PC:1, region:101},
						{id:323, name:"Nguyễn Triền", AC_PC:1, region:101},
						{id:324, name:"Phạm Bình Thản", AC_PC:1, region:101},
						{id:325, name:"Vũ Bá Tuấn", AC_PC:1, region:101},
						{id:326, name:"Vũ Kim Bình An", AC_PC:1, region:101},
						{id:327, name:"Huỳnh Tấn Phát", AC_PC:1, region:101},
						{id:328, name:"Đinh Văn Cường", AC_PC:1, region:101},
						{id:329, name:"Vũ Trọng Quan", AC_PC:1, region:101},
						{id:330, name:"Nguyễn Duy Tân", AC_PC:1, region:101},
						{id:331, name:"Trương Phúc Lợi", AC_PC:1, region:101},
						{id:332, name:"Lê Văn Chung", AC_PC:1, region:101},
						{id:333, name:"Nguyễn Văn Luân", AC_PC:1, region:101},
						{id:334, name:"Đinh Tiến Nhật", AC_PC:1, region:101},
						{id:335, name:"Phạm Quý Hải", AC_PC:1, region:101},
						{id:336, name:"Lê Hoàng Phúc", AC_PC:1, region:101},
						{id:337, name:"Trần Như Trí", AC_PC:1, region:101},
						{id:338, name:"Trần Mạnh Thích", AC_PC:1, region:101},
						{id:339, name:"Hoàng Văn Trung", AC_PC:1, region:101},
						{id:340, name:"Phan Như Trung", AC_PC:1, region:101},
						{id:341, name:"Nguyễn Mạnh Cường", AC_PC:1, region:101},
						{id:342, name:"Nguyễn Xuân Báu", AC_PC:1, region:101},
						{id:343, name:"Đoàn Đắc Đông", AC_PC:1, region:101},
						{id:344, name:"Nguyễn Văn Nhất", AC_PC:1, region:101},
						{id:345, name:"Nguyễn Đăng Vương", AC_PC:1, region:101},
						{id:346, name:"Trần Vĩnh Lộc", AC_PC:1, region:101},
						{id:347, name:"Trần Tiến Đạt", AC_PC:1, region:101},
						{id:348, name:"Bùi Trường Thọ", AC_PC:1, region:101},
						{id:349, name:"Nguyễn Hữu Thành", AC_PC:1, region:101},
						{id:350, name:"Nguyễn văn Phước", AC_PC:1, region:101},
						{id:351, name:"Trại Quốc Doanh", AC_PC:1, region:101},
						{id:352, name:"Dương Huỳnh Minh Đạt", AC_PC:1, region:101},
						{id:353, name:"Trần Quang Vũ", AC_PC:1, region:101},
						{id:354, name:"Nguyễn Đăng Thịnh", AC_PC:1, region:101},
						{id:355, name:"KY CHANNARITH", AC_PC:1, region:101},
						{id:356, name:"ENG SINAN", AC_PC:1, region:101},
						{id:357, name:"PUN RASKMEY", AC_PC:1, region:101},
						{id:358, name:"Long Kim Hương", AC_PC:1, region:101},
						{id:359, name:"HOR PHANIT", AC_PC:1, region:101},
						{id:360, name:"Thạch Tăng Ly", AC_PC:1, region:101},
						{id:361, name:"Vũ Hồng Quân", AC_PC:1, region:103},
						{id:362, name:"Hoàng Văn Ngoan", AC_PC:1, region:103},
						{id:363, name:"Trần Ngọc Vượng", AC_PC:1, region:103},
						{id:364, name:"Bùi Đình Đức", AC_PC:1, region:103},
						{id:365, name:"Nguyễn Đình Huấn", AC_PC:1, region:103},
						{id:366, name:"Nguyễn Trọng Tấn", AC_PC:1, region:103},
						{id:367, name:"Đinh Văn Hào", AC_PC:1, region:103},
						{id:368, name:"Nguyễn Thanh Tùng", AC_PC:1, region:103},
						{id:369, name:"Nguyễn Văn Anh", AC_PC:1, region:103},
						{id:370, name:"Bùi Vũ Phong", AC_PC:1, region:103},
						{id:371, name:"Bùi Thanh Hải", AC_PC:1, region:103},
						{id:372, name:"Nguyễn Quý Luân", AC_PC:1, region:103},
						{id:373, name:"Nguyễn Thế Hải", AC_PC:1, region:103},
						{id:374, name:"Phạm Văn Tám", AC_PC:1, region:103},
						{id:375, name:"Trần Văn Hải", AC_PC:1, region:103},
						{id:376, name:"Trần Văn Tâm", AC_PC:1, region:103},
						{id:377, name:"Nguyễn Thành Trung", AC_PC:1, region:103},
						{id:378, name:"Lương Quốc Vương", AC_PC:1, region:103},
						{id:379, name:"Đậu Hùng Cường", AC_PC:1, region:103},
						{id:380, name:"Nguyễn Trọng Hải", AC_PC:1, region:103},
						{id:381, name:"Nguyễn Hữu Hùng", AC_PC:1, region:103},
						{id:382, name:"Phan Văn Trường", AC_PC:1, region:103},
						{id:383, name:"Ngô Văn Sỹ", AC_PC:1, region:103},
						{id:384, name:"Phạm Đình Huy", AC_PC:1, region:103},
						{id:385, name:"Trần Trung Đông", AC_PC:1, region:103},
						{id:386, name:"Nguyễn Võ Tuấn Linh", AC_PC:1, region:103},
						{id:387, name:"Đỗ Đức Dũng", AC_PC:1, region:103},
						{id:388, name:"Hà Việt Hưng", AC_PC:1, region:103},
						{id:389, name:"Nguyễn Khoa Học", AC_PC:1, region:103},
						{id:390, name:"Ngô Xuân Hòa", AC_PC:1, region:104},
						{id:391, name:"Ngô Văn chiến", AC_PC:1, region:104},
						{id:392, name:"Ma Thế Tân", AC_PC:1, region:104},
						{id:393, name:"Đỗ Xuân Thỉnh", AC_PC:1, region:104},
						{id:394, name:"Nguyễn Bằng Phi", AC_PC:1, region:104},
						{id:395, name:"Giang Văn Minh", AC_PC:1, region:104},
						{id:396, name:"Khổng Minh Chiến", AC_PC:1, region:104},
						{id:397, name:"Nguyễn Quang Hải", AC_PC:1, region:104},
						{id:398, name:"Lâm Văn Điệp", AC_PC:1, region:104},
						{id:399, name:"Tống Minh Phú", AC_PC:1, region:104},
						{id:400, name:"Nguyễn Văn Sơn", AC_PC:1, region:104},
						{id:401, name:"Lê Trọng Tân", AC_PC:1, region:104},
						{id:402, name:"Đào Quang Trung", AC_PC:1, region:104},
						{id:403, name:"Nguyễn Trường Thịnh", AC_PC:1, region:104},
						{id:404, name:"Nguyễn Quốc Vương", AC_PC:1, region:104},
						{id:405, name:"Nguyễn Văn Hiệp", AC_PC:1, region:104},
						{id:406, name:"Mai Văn Đạt", AC_PC:1, region:104},
						{id:407, name:"Lê Hồng Trường", AC_PC:1, region:104},
						{id:408, name:"Nguyễn Minh Dũng", AC_PC:1, region:104},
						{id:409, name:"Nguyễn Văn Huân", AC_PC:1, region:104},
						{id:410, name:"Đồng Văn Ngọc", AC_PC:1, region:104},
						{id:411, name:"Đỗ Quang Chiến", AC_PC:1, region:104},
						{id:412, name:"Nguyễn Hoàng Lân", AC_PC:1, region:104},
						{id:413, name:"Mai Hoàng Quân", AC_PC:1, region:104},
						{id:414, name:"Hồ Ngọc Tâm", AC_PC:1, region:102},
						{id:415, name:"Nguyên Văn Phước", AC_PC:1, region:102},
						{id:416, name:"Nguyễn Văn Hà", AC_PC:1, region:102},
						{id:417, name:"Trần Văn Thành", AC_PC:1, region:102},
						{id:418, name:"Nguyễn Văn Vương", AC_PC:1, region:102},
						{id:419, name:"Tôn Thất Hoàng Nam", AC_PC:1, region:102},
						{id:420, name:"Lê Minh Khoa", AC_PC:1, region:102},
						{id:421, name:"Nguyễn Qúy Đô", AC_PC:1, region:102},
						{id:422, name:"Bùi Cảnh Thu", AC_PC:1, region:102},
						{id:423, name:"Lê Ngọc Phước", AC_PC:1, region:102},
						{id:424, name:"Nguyễn Xuân Qúy", AC_PC:1, region:102},
						{id:425, name:"Nguyễn Văn Mát", AC_PC:1, region:102},
						{id:426, name:"Nguyễn Văn Dũng", AC_PC:1, region:102},
						{id:427, name:"Hồ Văn Thịnh", AC_PC:1, region:102},
						{id:428, name:"Nguyễn Kiên Trung", AC_PC:1, region:102},
						{id:429, name:"Trần Phước", AC_PC:1, region:102},
						{id:430, name:"Trần Hải Dân", AC_PC:1, region:102},
						{id:431, name:"Đỗ Hùng Dũng", AC_PC:1, region:102},
						{id:432, name:"Nguyễn Doãn Đức", AC_PC:1, region:102},
						{id:433, name:"Phan Quốc Việt", AC_PC:1, region:102},
						{id:434, name:"Lê Trung Kiên", AC_PC:1, region:102},
						{id:435, name:"Nguyễn Văn An", AC_PC:1, region:102},
						{id:436, name:"Hồ Văn Quốc Huy", AC_PC:1, region:102},
						{id:437, name:"Võ Vũ Vương", AC_PC:1, region:102},
						{id:438, name:"Trần Văn Hùng", AC_PC:1, region:102},
						{id:439, name:"Hoàng Anh Tú", AC_PC:1, region:102},
						{id:440, name:"Trương Minh Đức", AC_PC:1, region:102},
						{id:441, name:"Bạch Văn Tân", AC_PC:1, region:102},
						{id:442, name:"Phan Phước Xuân", AC_PC:1, region:102},
						{id:443, name:"Phạm Lê Văn Đạt", AC_PC:1, region:102},
						{id:444, name:"Nguyễn Văn Chinh", AC_PC:1, region:102},
						{id:445, name:"Tô Hồng Sơn", AC_PC:1, region:102},
						{id:446, name:"Trần Gia Lâm", AC_PC:1, region:102},
						{id:447, name:"Lâm Hữu Toàn", AC_PC:1, region:102},
						{id:448, name:"Phan Thanh Tuấn", AC_PC:1, region:102},
						{id:449, name:"Bùi Quốc Quỳnh", AC_PC:1, region:102},
                    ]
)