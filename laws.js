/* =========================================================
   BỘ LUẬT — sửa nội dung luật trong file này.
   Mỗi bộ luật là một <template id="law-..."> ; mỗi mục là một <section>.
   ========================================================= */
document.getElementById('lawSrc').innerHTML = `
<template id="law-roleplay" data-short="Luật Roleplay" data-title="Luật Roleplay UPD" data-intro="Ba bộ luật gói gọn trong một trang: dành cho người dân, cho cảnh sát UPD và cho doanh nghiệp. Đọc kỹ trước khi vào thành phố." data-credit="Nội dung gốc thuộc về Le Bill và Johnson Larry.">
<section id="dan">
<h2>Dành cho người dân</h2>
<p class="lead">Quyền của bạn, nghĩa vụ của bạn và những việc cần làm khi bị cảnh sát bắt.</p>

<h3>Giấy tờ bắt buộc</h3>
<div class="box"><ul>
<li>Ra đường phải mang <b>Căn cước</b>.</li>
<li>Lái xe phải mang thêm <b>Bằng lái</b>.</li>
</ul></div>

<h3>Khi bạn muốn tố cáo cảnh sát hoặc bác sĩ</h3>
<div class="box"><p>Bạn có quyền tố cáo người nhà nước (cảnh sát, bác sĩ) nếu thấy họ làm sai, với điều kiện:</p><ul>
<li>Có <b>bằng chứng cụ thể</b>: giấy tờ, hình ảnh hoặc video.</li>
<li>Tự đến đồn cảnh sát, đưa bằng chứng và làm việc trực tiếp với người đủ thẩm quyền xử lý khiếu nại.</li>
<li>Nhân chứng sống được phép đi cùng hỗ trợ bạn. Khi đến đồn, hãy lịch sự và tôn trọng.</li>
</ul></div>

<h3>Khi cảnh sát làm việc với bạn</h3>
<div class="box"><ul>
<li>Cảnh sát được kiểm tra hành chính khi bạn có dấu hiệu nghi phạm tội, ví dụ xuất hiện trong khu vực cấm hoặc vi phạm giao thông.</li>
<li>Nếu đã có <b>nhân chứng</b> tại hiện trường, cảnh sát không cần đưa thêm video hay hình ảnh làm bằng chứng.</li>
<li>Với người không chấp hành, cảnh sát được dùng biện pháp mạnh trong phòng giam, kể cả tịch thu thiết bị ghi hình của đối tượng.</li>
<li>Được cảnh sát triệu tập là phải đến đồn làm việc. Không đến thì <b class="r">TTC</b> sẽ trực tiếp xử lý, nặng nhất có thể bị <b class="r">trục xuất 1 đến 7 ngày hoặc tử hình</b>.</li>
<li>Hãy giữ thái độ tôn trọng. Cảnh sát có quyền từ chối tương tác với người cư xử thiếu tôn trọng.</li>
</ul></div>

<div class="alert">Bodycam chỉ được dùng khi bộ Nội vụ UPD xử lý khiếu nại hoặc kiện cáo giữa người dân và cảnh sát. Người dân <b class="r">không có quyền</b> đòi cảnh sát cho xem bodycam trong bất kỳ tình huống nào.</div>

<h3>Khi bạn bị bắt</h3>
<div class="box"><ul>
<li><b>Bị còng tay thì không được dùng tay</b> để nói chuyện đàm hoặc dùng điện thoại. Làm vậy là phạm luật OOC "PG" (phi thực tế). Lần đầu xử IC, tái phạm lần 2 sẽ xử OOC.</li>
<li>Nếu đời thật có việc đột xuất, hãy báo cảnh sát và giải quyết tình huống roleplay thật nhanh.</li>
<li>Nếu bị crash game, liên hệ cảnh sát qua Discord. Kết nối lại xong, đến đồn trình diện và tiếp tục tình huống.</li>
<li>Không làm đúng các bước trên thì bị xử lý OOC.</li>
</ul></div>
</section>

<section id="upd">
<h2>Dành cho cảnh sát UPD</h2>
<p class="lead">Cảnh sát là bộ mặt của luật pháp thành phố, nên chuẩn mực cao hơn người thường.</p>

<h3>Tác phong</h3>
<div class="box"><ul>
<li>Không xưng "mày, tao" với dân, đồng nghiệp hay cấp trên.</li>
<li>Ăn nói chuẩn mực, vì bạn đại diện cho luật pháp thành phố.</li>
<li>Cấm tỏ thái độ với người dân. Bị phát hiện sẽ bị kỷ luật.</li>
<li>Khi kiểm tra hành chính, luôn vui vẻ và hòa nhã.</li>
</ul></div>

<h3>Phương tiện và đồ ngành</h3>
<div class="box"><ul>
<li>Không dùng xe hoặc trực thăng đặc chủng cho việc cá nhân.</li>
<li>Dùng xong phải cất vào Garage, không đậu bừa bãi.</li>
<li>Còng, súng điện, gậy baton chỉ dùng đúng mục đích. Khi off-duty hoặc không mặc đồng phục, không được dùng.</li>
<li>Cấm tuồn đồ nhà nước ra ngoài: súng điện, còng tay, gậy baton, đèn pin, đồ bẩn…</li>
</ul></div>

<h3>Giờ trực (on-duty)</h3>
<div class="box"><ul>
<li>Đang on-duty thì không đi làm nghề khác.</li>
<li>Không treo lương hay AFK. Đứng im quá 5 phút và không trả lời khi gọi là vi phạm.</li>
<li>Tham gia nhiệm vụ phải mặc đồng phục, đi tuần hoặc bắt tội phạm bằng xe chuyên dụng, giữ đàm và mic ổn định nhất có thể.</li>
<li>Muốn kiện cáo ai thì phải có bằng chứng (video, hình ảnh…), không có sẽ bị xử phạt.</li>
</ul></div>

<h3>Quy trình xử án</h3>
<div class="box"><ol>
<li>Chào tội phạm và xuất trình thẻ ngành.</li>
<li>Yêu cầu tháo mặt nạ, xuất trình CCCD và bằng lái (nếu đối tượng đang điều khiển phương tiện).</li>
<li>Thông báo tội danh và mức phạt.</li>
<li>Tiến hành xử phạt.</li>
</ol></div>

<h3>Tuần tra, dừng xe và truy bắt</h3>
<div class="box"><ul>
<li>Muốn dừng xe ai, phải bật đèn còi và yêu cầu người lái dừng lại, xuống xe.</li>
<li>Đối tượng bỏ chạy: bật còi để truy bắt.</li>
<li>Không chèn xe sai luật (húc đầu, húc đuôi, húc ngang hông).</li>
<li>Không có bằng chứng video vẫn xử được nếu đã có nhân chứng tại hiện trường.</li>
</ul></div>

<h3>Khu vực cấm</h3>
<div class="box"><p><b>Trước khi vào:</b></p><ul>
<li>Bật còi và đèn báo hiệu từ cách khu vực <b>222m</b> (hoặc cách 4 số so với địa điểm). Quy định này áp dụng cả với nơi chế đồ bẩn, đồ nguy hiểm, trộm nhà, hái và chế biến cần sa.</li>
<li>Chỉ được kiểm tra một khu vực cấm <b>15 phút một lần</b>. Cấm cắm chốt (CAMP) ở khu vực cấm, nhất là các bãi nghề bẩn.</li>
</ul>
<p><b>Quyền hạn khi kiểm tra:</b></p><ul>
<li>Được dùng mọi phương tiện gần khu vực cấm, vùng đỏ, hoặc nơi xảy ra trộm cướp, ẩu đả, giết người.</li>
<li>Được dùng mọi phương tiện trong bán kính hình vuông 9 dãy nhà tính từ khu vực cấm hoặc vùng đỏ.</li>
<li>Được truy nã đối tượng chống đối, kháng lệnh. Phải truy nã đúng hiện trạng lúc phát hiện.</li>
<li>Được đàn áp trước nếu đối tượng bị truy nã, cầm vũ khí, hoặc cảnh sát bị đấm. Khi đó dùng nghiệp vụ khống chế.</li>
<li>Khi bắt: áp giải, còng tay và đưa về trụ sở làm việc.</li>
</ul></div>

<h3>Vụ cướp có con tin</h3>
<div class="alert">Mạng sống con tin luôn đặt lên hàng đầu. Không áp chế, hãy đàm phán với cướp.</div>
<div class="box"><ul>
<li>Đảm bảo an toàn cho con tin trong các vụ cướp lớn có yêu cầu con tin.</li>
<li>Cướp thả con tin rồi tẩu thoát: cảnh sát được truy đuổi theo thời gian ghi trong Luật Cướp. Hết thời gian đó mới được đàn áp bằng nghiệp vụ đã nêu để hạ cướp, nhưng vẫn ưu tiên khống chế đối tượng.</li>
<li>Có vụ cướp con tin, cảnh sát phải báo khẩn cấp cho Bác sĩ để cấp cứu kịp thời nếu con tin bị thương.</li>
<li>Bác sĩ không được tự ý vào khu vực cấm để đón bệnh nhân. Phải báo cảnh sát, và cảnh sát phải cử người đi cùng để hộ tống.</li>
</ul></div>

<h3>Vũ khí và đồ chuyên dụng</h3>
<div class="box"><ul>
<li><b>Súng điện:</b> dùng khi công dân không chấp hành hiệu lệnh.</li>
<li><b>Còng tay:</b> dùng khi tội phạm đã gục, ví dụ sau khi bị bắn súng điện hoặc gạt giò. Tránh spam còng tay.</li>
<li><b>Baton:</b> dùng khi đối tượng có dấu hiệu chống trả cảnh sát hoặc gây rối nơi công cộng.</li>
<li><b>Sau truy đuổi cướp nhỏ hoặc lớn:</b> khi xe tội phạm hỏng hoàn toàn, cảnh sát xuống xe truy đuổi. Sau 10 giây, hoặc sau 5 lần yêu cầu đứng lại mà đối tượng không dừng, được dùng biện pháp áp chế như bắn súng điện, gạt giò.</li>
</ul></div>

<h3>Điều tuyệt đối cấm</h3>
<div class="box"><ul>
<li>Tham gia gia tộc hoặc bất kỳ tổ chức băng đảng nào trong thành phố.</li>
<li>Làm nghề bẩn. Chỉ được làm khi High Command hoặc cấp trên yêu cầu.</li>
<li>Lạm quyền, bao che cho tội phạm.</li>
<li>Tuồn đồ của cảnh sát ra ngoài.</li>
</ul></div>
</section>

<section id="dn">
<h2>Dành cho doanh nghiệp</h2>
<p class="lead">Doanh nghiệp và cảnh sát cùng giữ trật tự, nên hai bên cần phối hợp nhịp nhàng.</p>
<div class="box"><ul>
<li>Cảnh sát có quyền kiểm tra hành chính người và phương tiện của mọi doanh nghiệp trong tiểu bang, thành phố. Quyền này có hiệu lực từ khi cảnh sát đưa ra thông báo.</li>
<li>Khi kiểm tra hành chính, kiểm tra cơ sở vật chất hoặc lục soát, cảnh sát được yêu cầu doanh nghiệp <b>dừng mọi hoạt động</b> trong lúc làm nhiệm vụ. Người trong doanh nghiệp có nghĩa vụ hỗ trợ điều tra.</li>
<li>Mọi đơn vị muốn làm việc với cơ quan chức năng đều phải chứng minh nghề nghiệp liên quan, ví dụ bằng thẻ ngành.</li>
</ul></div>
</section>
</template>

<template id="law-phat" data-short="Luật Phạt" data-title="Luật phạt và giao thông" data-intro="Các tội danh, quy định về phương tiện và luật sửa xe khi bị truy đuổi. Tra nhanh bằng ba mục bên dưới." data-credit="Nội dung gốc thuộc về Le Bill và Johnson Larry.">
<section id="phat">
<h2>Luật phạt chung</h2>
<p class="lead">Danh sách tội danh trong thành phố.</p>

<div class="two">
<div class="box"><h3>Chuộc bãi</h3><p>Chuộc là chuộc hết số bãi bạn đang có. PD không có nghĩa vụ phải cho chuộc.</p></div>
<div class="box"><h3>Kiểm tra hành chính</h3><p>Gồm CCCD, bằng lái và kiểm tra xe. Cảnh sát được lục soát người khi đối tượng ở trong vùng cấm hoặc bị tình nghi vi phạm pháp luật.</p></div>
</div>

<h3>Bảng tội danh</h3>
<div class="tablebox"><table>
<tr><th>#</th><th>Hành vi</th></tr>
<tr><td class="n">1</td><td>Gây rối trật tự công cộng, đánh nhau trong toàn tiểu bang/thành phố</td></tr>
<tr><td class="n">2</td><td>Cản trở người thi hành công vụ, kể cả trêu đùa hay đẩy ngã cảnh sát, bác sĩ</td></tr>
<tr><td class="n">3</td><td>Chặn, ép, tông xe cảnh sát hoặc bác sĩ</td></tr>
<tr><td class="n">4</td><td>Không hợp tác, không tuân theo hiệu lệnh cảnh sát, dùng phương tiện trêu ghẹo cảnh sát
<small>Ngoài tình huống cướp, cảnh sát được khống chế trực tiếp (còng tay, bắn súng điện) hoặc truy đuổi tính từ còi 3.</small></td></tr>
<tr><td class="n">5</td><td>Gây ồn tại khu vực ban ngành (đồn cảnh sát, bệnh viện)</td></tr>
<tr><td class="n">6a</td><td>Đe dọa, xúc phạm, phỉ báng, lăng mạ; phân biệt chủng tộc, giới tính bằng lời nói hoặc hành động
<small>Nếu nạn nhân là nhân viên nhà nước (cảnh sát, bác sĩ) thì hình phạt nhân đôi.</small></td></tr>
<tr><td class="n">6b</td><td>Vu khống, bịa đặt hoặc lan truyền điều biết rõ là sai sự thật để xúc phạm nhân phẩm, danh dự hoặc gây thiệt hại cho người khác
<small>Người vu khống phải bồi thường tinh thần cho nạn nhân.</small></td></tr>
<tr><td class="n">7</td><td>Cưỡng đoạt tài sản: đe dọa, dùng vũ lực hoặc thủ đoạn khác để chiếm đoạt tài sản
<small>Nếu dùng vũ lực gây thương tích, bị phạt thêm tội cố ý gây thương tích.</small></td></tr>
<tr><td class="n">8a</td><td>Phá hoại tài sản của người khác, và phải bồi thường thiệt hại</td></tr>
<tr><td class="n">8b</td><td>Phá hoại tài sản nhà nước (của cảnh sát, bệnh viện hoặc TTC)</td></tr>
<tr><td class="n">8c</td><td>Phá hoại tài sản doanh nghiệp, và phải bồi thường cho doanh nghiệp</td></tr>
<tr><td class="n">9</td><td>Phi tang vật chứng, đồ bẩn, kể cả khi về đồn không còn tang vật dù đã bắt hết tội phạm trong tình huống</td></tr>
<tr><td class="n">10</td><td>Không mang giấy tờ tùy thân (CCCD, bằng lái…)</td></tr>
<tr><td class="n">11</td><td>Đồng phạm: chịu chung mức phạt với người vi phạm</td></tr>
<tr><td class="n">12</td><td>Cướp, trộm, trấn lột đồ dùng đặc biệt dành riêng cho nhân viên nhà nước, chính phủ</td></tr>
<tr><td class="n">13</td><td>Đăng tin nghề bẩn (kể cả ẩn ý, viết tắt), buôn bán hàng cấm, chất cấm, vũ khí trên mạng xã hội (toác tơ) và quảng cáo</td></tr>
<tr><td class="n">14</td><td>Vượt ngục liên bang, trốn khỏi trại tạm giam của sở cảnh sát (hỗ trợ vượt ngục cũng bị tính)</td></tr>
<tr><td class="n">15</td><td>Cố ý gây thương tích: bồi thường toàn bộ viện phí cho người bị hại, tịch thu vũ khí gây án (nếu có)
<small>Tự vệ chính đáng thì không bị xử phạt.</small></td></tr>
<tr><td class="n">16</td><td>Cá nhân hoặc tổ chức tham gia đánh nhau</td></tr>
<tr><td class="n">17</td><td>Giết người: tịch thu toàn bộ vũ khí nếu không có GPVK
<small>Giết người không lý do thì chuyển hồ sơ sang Tòa Thị Chính giải quyết.</small></td></tr>
<tr><td class="n">18</td><td>Giả mạo nhân viên nhà nước (cảnh sát, bác sĩ) khi không thuộc ban ngành</td></tr>
</table></div>
</section>

<section id="xe">
<h2>Luật phương tiện</h2>
<p class="lead">Chạy xe đúng luật là cách rẻ nhất để không phải nộp phạt.</p>

<div class="alert">Giới hạn tốc độ: tối đa <b>100 km/h</b> trong thành phố và <b>140 km/h</b> ngoài thành phố.</div>

<div class="tablebox"><table>
<tr><th>#</th><th>Vi phạm</th></tr>
<tr><td class="n">1</td><td>Dàn hàng ngang, lạng lách đánh võng, đi ngược chiều, đậu xe sai quy định</td></tr>
<tr><td class="n">2</td><td>Dùng xe không chính chủ</td></tr>
<tr><td class="n">3</td><td>Chạy ngược chiều
<small>Nếu gây tai nạn phải bồi thường thiệt hại.</small></td></tr>
<tr><td class="n">4</td><td>Dùng xe doanh nghiệp, ban ngành hoặc xe thuê sai mục đích (làm nghề sạch khác, làm bẩn, đi chơi, đi cướp…)</td></tr>
<tr><td class="n">5</td><td>Cướp máy bay, xe bay, xe tank hoặc phương tiện quân đội
<small>Có thể được chuyển lên TTC để xét trục xuất khỏi thành phố.</small></td></tr>
<tr><td class="n">6</td><td>Tổ chức hoặc tham gia đua xe trái phép</td></tr>
<tr><td class="n">7</td><td>Đậu xe bừa bãi trước bệnh viện, đồn cảnh sát, ban ngành nhà nước hoặc doanh nghiệp tư nhân
<small>Lần đầu chỉ nhắc nhở. Tái phạm thì thu giữ xe.</small></td></tr>
<tr><td class="n">8</td><td>Xe chở quá số người quy định</td></tr>
<tr><td class="n">9</td><td>Xe không đăng ký biển số chính chủ</td></tr>
<tr><td class="n">10</td><td>Xe bị giam giữ (vứt xe lung tung, để xe gần vùng cấm)</td></tr>
<tr><td class="n">11</td><td>Vượt tốc độ cho phép</td></tr>
<tr><td class="n">12</td><td>Xe không đủ điều kiện lưu thông (thiếu bộ phận, bể kính, hỏng ngoại thất…)
<small>Bị kiểm tra hành chính.</small></td></tr>
</table></div>
</section>

<section id="sua">
<h2>Luật sửa xe</h2>
<p class="lead">Áp dụng cho mọi phương tiện trong lúc truy đuổi. Sửa xe ở thời điểm sai là vi phạm.</p>

<div class="two">
<div class="box"><h3>Người dân, tội phạm</h3><ul>
<li>Đang bị truy đuổi thì <b class="r">cấm</b> dùng lệnh /suaxe, /fix hoặc bộ kit sửa xe. Vi phạm: cảnh sát được còi 3 và dùng súng điện ngay khi bạn xuống xe.</li>
<li>Nếu có Mechanic đang trực, bạn <b>được sửa xe ở gara</b>.</li>
<li>Sửa xong thì <b class="r">cấm đổi xe, cất xe hoặc độ xe</b>.</li>
</ul></div>
<div class="box"><h3>Cảnh sát</h3><ul>
<li>Khi còn truy đuổi tiếp được, <b>hạn chế</b> sửa xe.</li>
<li>Nếu tội phạm vi phạm luật sửa xe, cảnh sát được dùng /suaxe, /fix hoặc dịch vụ sửa xe của PD.</li>
<li>Ngoài thời gian truy đuổi, cảnh sát <b>được phép</b> sửa xe.</li>
</ul></div>
</div>

<h3>Cần nhớ</h3>
<div class="alert">Nếu hoàn toàn mất dấu mục tiêu, việc sửa xe được áp dụng cho cả cư dân và cảnh sát.</div>
<div class="alert">Nếu có can thiệp /fix, /suaxe trong lúc truy đuổi (cheat, hack), PD sẽ gửi bằng chứng lên TTC để xử lý nghiêm.</div>
</section>
</template>

<template id="law-truyduoi" data-short="Truy Đuổi" data-title="Luật Truy Đuổi" data-intro="Áp dụng cho mọi tình huống truy đuổi: mức còi, quyền hạn của cảnh sát với xe hơi, xe máy, Air-One và truy dấu sau khi đối tượng trốn thoát." data-credit="Nội dung gốc thuộc về Le Bill và Johnson Larry.">
<section id="chung">
<h2>Nguyên tắc chung</h2>
<p class="lead">Áp dụng cho mọi tình huống truy đuổi.</p>
<div class="box"><ul>
<li>Một số tình huống truy đuổi bị 2 thế giới, sẽ xảy ra tình trạng va chạm mạnh giữa 2 bên. Mong người dân thông cảm!</li>
<li>Khi đối tượng lao xuống nước, Cảnh Sát có quyền <b>còng tay trực tiếp</b>, tránh dùng súng điện có thể dẫn đến đối tượng bị chết ngạt.</li>
<li>Sẽ có một số tình huống rớt map thì yêu cầu người dân phải <b>liên hệ với Cảnh Sát</b> để tiếp tục tình huống. Nếu không thì sẽ chuyển hồ sơ sang <b class="r">TTC</b> giải quyết.</li>
</ul></div>
</section>

<section id="xehoi">
<h2>Xe hơi</h2>
<div class="box"><ul>
<li>Khi Cảnh Sát bắt đầu chèn xe, nếu xe cướp đang đi tốc độ cao và xe Cảnh Sát tiến hành chèn xe sẽ xảy ra tình trạng va chạm mạnh giữa 2 bên thì sẽ <b>không tính là Cảnh Sát cố tình tông</b>.</li>
<li>Một vài tình huống khác cũng sẽ không tính vào trường hợp Cảnh Sát cố tình tông xe cướp, ví dụ như: bay xe, xe cướp thắng gấp…</li>
<li>Khi tội phạm bước xuống xe sẽ có <b>10 giây</b> để chạy. Sau 10 giây, Cảnh Sát được phép sử dụng súng điện để khống chế.</li>
<li>Cảnh Sát được quyền còng tội phạm khi đã bắn súng điện, tự ngã hoặc không di chuyển nữa.</li>
<li>Ngoài ra khi đang truy dấu, nếu Cảnh Sát khác thấy phương tiện hoặc người dân có nhân dạng giống đối tượng đang truy dấu thì Cảnh Sát đó được phép bật còi truy đuổi theo để giữ dấu, đến khi các Cảnh Sát trong tình huống đến và tiếp tục tình huống.</li>
</ul></div>
<div class="tablebox"><table>
<tr><th>Mức còi</th><th>Cảnh Sát được làm gì</th></tr>
<tr><td class="m">Còi 1</td><td>Chỉ được quyền theo dấu, cảnh báo dừng xe trong <b>2 phút</b>. Nếu không chấp hành sẽ chuyển còi 2.</td></tr>
<tr><td class="m">Còi 2</td><td>Được chặn đường, PIT xe đối tượng (tốc độ <b>dưới 80 km/h</b>) trong <b>5 phút</b>. Nếu xe đối tượng bị kẹt, có quyền chặn đường ra.
<small>PIT: dùng đầu và đuôi xe để chèn vào góc xe đối tượng, dùng thân xe và góc đèn xe để ép vào đầu và thân xe đối tượng.</small></td></tr>
<tr><td class="m">Còi 3</td><td>Tiến hành chặn đường, chèn, ép và PIT xe đối tượng <b class="r">không giới hạn tốc độ</b>.</td></tr>
</table></div>
</section>

<section id="xemay">
<h2>Xe máy</h2>
<div class="alert">Xe máy là phương tiện dễ bị ngã khi va chạm trong những tình huống truy đuổi, do đó sẽ <b>không được tính là Car Ramming</b>.</div>
<div class="tablebox"><table>
<tr><th>Mức còi</th><th>Thời gian đổi còi và quyền hạn</th></tr>
<tr><td class="m">Còi 1</td><td>Chỉ được quyền theo dấu, cảnh báo dừng xe trong <b>2 phút</b>.
<small>Nếu đối tượng có dấu hiệu đá thì bên phía Cảnh Sát sẽ chuyển sang còi 3.</small></td></tr>
<tr><td class="m">Còi 2</td><td>Được phép gây cản trở phương tiện của đối tượng và sử dụng baton (tốc độ <b>dưới 80 km/h</b>).</td></tr>
<tr><td class="m">Còi 3</td><td>Tiến hành sử dụng súng điện vào người đối tượng để vô hiệu hóa khả năng di chuyển, <b class="r">không giới hạn tốc độ</b>.
<small>Áp dụng cho: truy đuổi sau 10 phút, vi phạm luật truy đuổi (Back-Up, Sửa Xe…), những tình huống không nằm trong phó bản…</small></td></tr>
</table></div>
</section>

<section id="airone">
<h2>Air-One</h2>
<div class="box"><ul>
<li>Chỉ được sử dụng Air-One trong các phó bản cho phép, truy đuổi hoặc truy dấu tội phạm vi phạm <b>Luật Truy Đuổi Xuống Nước</b>, tấn công PD.</li>
<li>Air-One được phép sử dụng các tính năng được cung cấp sẵn để sẵn sàng hỗ trợ truy đuổi.</li>
</ul></div>
</section>

<section id="truydau">
<h2>Truy dấu</h2>
<p class="lead">Áp dụng cho các tình huống vi phạm luật.</p>
<div class="alert">Thường sẽ áp dụng cho các vi phạm trong <b>Luật Phạt Chung</b> và <b>Luật Phương Tiện</b>.</div>
<div class="box"><ul>
<li>Nếu trốn thoát thành công thì sau <b>10 phút</b> mới có thể thay đổi trang phục, mặt nạ, phương tiện. Trong vòng 10 phút đó, Cảnh Sát phải bật đèn đi tìm. Nếu phát hiện người dân nào có các đặc điểm như trang phục, mặt nạ, phương tiện sẽ tiến hành kiểm tra, mời về đồn làm việc.</li>
<li>Khi tội phạm bước xuống xe sẽ có <b>10 giây</b> để chạy. Sau 10 giây, Cảnh Sát được phép sử dụng súng điện để khống chế.</li>
<li>Cảnh Sát được quyền còng tội phạm khi đã bắn súng điện, tự ngã hoặc không di chuyển nữa.</li>
</ul></div>
<div class="two">
<div class="box"><h3>Xe hơi (4 bánh)</h3><p>Các hành động trong các còi áp dụng như luật đã ghi ở phần Xe hơi.</p></div>
<div class="box"><h3>Xe máy (2 bánh)</h3><p>Các hành động trong các còi áp dụng như luật đã ghi ở phần Xe máy.</p></div>
</div>
</section>
</template>

<template id="law-nuoc" data-short="Xuống Nước" data-title="Luật Truy Đuổi Xuống Nước" data-intro="Áp dụng khi đối tượng nhảy hoặc lao xuống nước trong lúc bị truy đuổi, ở bất kỳ khu vực nào, và với tất cả thành viên tham gia kể cả đồng phạm." data-credit="Nội dung gốc thuộc về Le Bill và Johnson Larry.">
<section id="chung">
<h2>Nguyên tắc chung</h2>
<p class="lead">Dưới nước, an toàn tính mạng đi trước. Vì vậy cảnh sát có cách xử lý riêng.</p>
<div class="two">
<div class="box"><h3>Cảnh sát được</h3><ul>
<li>Mặc đồ lặn và nhảy theo tội phạm.</li>
<li>Dùng <b>thuyền</b> để tiếp tục truy đuổi và truy vết.</li>
<li>Dùng <b>AIR1 (trực thăng)</b> ở tình huống 2 và 3.</li>
</ul></div>
<div class="box"><h3>Cách khống chế</h3>
<p><b>Còng trực tiếp</b> thay vì dùng súng điện, vì bị súng điện bắn dưới nước có thể chết đuối.</p></div>
</div>
</section>

<section id="tinhhuong">
<h2>5 tình huống</h2>
<p class="lead">Chọn đúng tình huống của vụ việc. Ở mọi tình huống, đồ bẩn đều bị tịch thu toàn bộ.</p>
<div class="tablebox"><table>
<tr><th>#</th><th>Tình huống</th><th>Cảnh sát truy bắt bằng</th></tr>
<tr><td class="n">1</td><td><b>Chạy chậm, dừng xe, nhảy xuống nước</b></td><td>Đồ lặn nhảy theo, thuyền</td></tr>
<tr><td class="n">2</td><td><b>Chạy nhanh, không va chạm, lao thẳng xuống nước</b></td><td>Lao xuống bắt hoặc đồ lặn nhảy theo, thuyền hoặc AIR1</td></tr>
<tr><td class="n">3</td><td><b>Chạy nhanh, cố tình bay, va chạm vật thể hoặc xe cảnh sát để văng xuống nước</b></td><td>Lao xuống bắt hoặc đồ lặn nhảy theo, thuyền hoặc AIR1</td></tr>
<tr><td class="n">4</td><td><b>Chạy nhanh, va chạm vật thể, theo quán tính văng xuống nước</b></td><td>Lao xuống bắt hoặc đồ lặn nhảy theo, thuyền</td></tr>
<tr><td class="n">5</td><td><b>Chạy nhanh, va chạm xe cảnh sát, theo quán tính văng xuống nước</b></td><td>Lao xuống bắt hoặc đồ lặn nhảy theo, thuyền</td></tr>
</table></div>
</section>

<section id="luuy">
<h2>Lưu ý</h2>
<div class="box"><ul>
<li>Cảnh sát được gọi hỗ trợ <b>AIR1 (trực thăng)</b> khi đối tượng vi phạm Luật Truy Đuổi.</li>
<li>Cảnh sát được gọi xe hỗ trợ khi xe truy đuổi bị hỏng hoặc không thể tiếp tục.</li>
<li>Phương tiện nào cố ý cản trở cảnh sát khi truy bắt, truy đuổi, hoặc giúp tội phạm bỏ trốn, nếu bị bắt sẽ bị xử phạt theo <b class="r">Luật Tòng Phạm</b>.</li>
</ul></div>
<div class="alert">Cảnh sát được <b>miễn trách nhiệm</b> nếu tội phạm đã bị còng mà vẫn chết ngạt.</div>
</section>
</template>

<template id="law-cuop" data-short="Luật Cướp" data-title="Luật Cướp" data-intro="Khung luật chung cho mọi vụ cướp, cộng với quy định riêng cho từng cấp độ và từng loại cướp." data-credit="Nội dung gốc thuộc về Le Bill và Johnson Larry.">
<section id="chung">
<h2>Quy định chung</h2>
<p class="lead">Áp dụng cho mọi vụ cướp, trừ khi luật riêng của loại cướp đó ghi khác.</p>

<div class="two">
<div class="box"><h3>Trang bị</h3><ul>
<li>Phải đeo mặt nạ che hơn <b>50%</b> khuôn mặt.</li>
</ul></div>
<div class="box"><h3>Phương tiện</h3>
<p><b>Được dùng:</b> xe 4 chỗ, xe 2 chỗ, xe backup, xe quá khổ.</p>
<p><b class="r">Không được dùng:</b> xe chưa thông hành, xe đồ chơi, xe 2 bánh.</p></div>
</div>

<div class="alert">Dùng phương tiện không được phép tham gia vụ cướp: cảnh sát được <b class="r">bật còi 3 ngay lập tức</b>.</div>

<h3>Khi truy đuổi</h3>
<div class="box"><ul>
<li>Áp dụng <b>Luật Truy Đuổi</b>.</li>
<li>Cảnh sát được gọi xe hỗ trợ khi xe truy đuổi bị hỏng hoặc không thể tiếp tục.</li>
<li>Nếu đối tượng nhảy hoặc lao xuống nước, chuyển sang áp dụng <b>Luật Truy Đuổi Xuống Nước</b>.</li>
<li>Nếu có người <b>văng khỏi phương tiện</b> khi chạy trốn, cảnh sát được bắt giữ người đó và tiếp tục truy đuổi.</li>
</ul></div>

<h3>Không đáp ứng điều kiện</h3>
<div class="box"><ul>
<li>Cảnh sát được <b>còi 3 và áp chế ngay lập tức</b>.</li>
<li>Cảnh sát được chuyển hồ sơ sang TTC xử lý.</li>
<li>Nếu có thiệt hại về tính mạng, cảnh sát <b>không</b> có nghĩa vụ đền bù và không chịu trách nhiệm pháp lý nào.</li>
</ul></div>
</section>

<section id="loai">
<h2>Luật riêng từng loại cướp</h2>
<p class="lead">Mỗi loại cướp có quy định riêng, chia theo 3 cấp độ. Bấm vào từng loại để xem chi tiết.</p>
<!-- Thêm loại cướp: sao chép nguyên một khối <details class="heist">…</details>, đổi tên và dán nội dung vào <div class="hb">. Mẫu điền luật: xem khối "Trộm trụ điện" (bảng <div class="spec">). -->
<div class="lvl" data-lv="1">
<div class="lvl-h"><b>Level 1</b><span>4 loại</span></div>
<div class="box lvl-r"><ul>
<li>Quy định tối đa các thành viên tham gia là <b>4 người</b>.</li>
<li>Số lượng phương tiện tham gia vào vụ cướp là <b>1 xe</b> (xe 4 chỗ và xe máy đều được).</li>
</ul></div>
<details class="heist"><summary><span class="hn">Trộm đồng hồ</span><span class="hx"></span></summary><div class="hb">
<p class="tbd">Nội dung luật đang được cập nhật.</p>
</div></details>
<details class="heist"><summary><span class="hn">Trộm trụ điện</span><span class="hx"></span></summary><div class="hb">
<div class="spec">
<div><span>Người tối đa</span><p><b>4 người mỗi xe</b><small>Vượt số người tối đa thì hủy tình huống.</small></p></div>
<div><span>Người được ra tay</span><p>Đi 2 người: <b>1 người</b> ra tay. Đi 3 hoặc 4 người: <b>2 người</b> ra tay.<small>Tài xế luôn ngồi trên xe.</small></p></div>
<div><span>Cảnh sát tối đa</span><p><b>3 xe cảnh sát</b> mỗi xe vi phạm<small>Không giới hạn loại xe cảnh sát.</small></p></div>
<div><span>Phương tiện</span><p>Tịch thu phương tiện tham gia và áp dụng luật tịch thu.<small>Tính cả đồng phạm.</small></p></div>
</div>
</div></details>
<details class="heist"><summary><span class="hn">Trộm mộ</span><span class="hx"></span></summary><div class="hb">
<p class="tbd">Nội dung luật đang được cập nhật.</p>
</div></details>
<details class="heist"><summary><span class="hn">Trộm chó</span><span class="hx"></span></summary><div class="hb">
<p class="tbd">Nội dung luật đang được cập nhật.</p>
</div></details>
</div>
<div class="lvl" data-lv="2">
<div class="lvl-h"><b>Level 2</b><span>2 loại</span></div>
<div class="box lvl-r"><ul>
<li>Áp dụng <b>Luật Vùng Đỏ</b>.</li>
</ul></div>
<details class="heist"><summary><span class="hn">Rã bánh xe</span><span class="hx"></span></summary><div class="hb">
<p class="tbd">Nội dung luật đang được cập nhật.</p>
</div></details>
<details class="heist"><summary><span class="hn">Đào đá bẩn</span><span class="hx"></span></summary><div class="hb">
<p class="tbd">Nội dung luật đang được cập nhật.</p>
</div></details>
</div>
<div class="lvl" data-lv="3">
<div class="lvl-h"><b>Level 3</b><span>3 loại</span></div>
<div class="box lvl-r"><ul>
<li>Quy định tối đa các thành viên tham gia là <b>4 người</b>.</li>
<li>Số lượng phương tiện tham gia vào vụ cướp là <b>1 xe</b>, <b class="r">cấm xe máy</b>.</li>
<li>Số lượng con tin là <b>1</b>.</li>
</ul></div>
<details class="heist"><summary><span class="hn">Trộm nhà</span><span class="hx"></span></summary><div class="hb">
<p class="tbd">Nội dung luật đang được cập nhật.</p>
</div></details>
<details class="heist"><summary><span class="hn">Container</span><span class="hx"></span></summary><div class="hb">
<p class="tbd">Nội dung luật đang được cập nhật.</p>
</div></details>
<details class="heist"><summary><span class="hn">Cướp ATM</span><span class="hx"></span></summary><div class="hb">
<p class="tbd">Nội dung luật đang được cập nhật.</p>
</div></details>
</div>
</section>

<section id="tron">
<h2>Sau khi trốn thoát</h2>
<p class="lead">Thoát được cảnh sát chưa có nghĩa là xong. Hãy làm đúng thứ tự dưới đây.</p>

<div class="two">
<div class="box"><h3>Bên tội phạm</h3><ul>
<li>Sau khi trốn thoát thành công, chờ đủ <b>10 phút</b> mới được đổi trang phục, mặt nạ, phương tiện.</li>
<li><b class="r">Cấm</b> về nhà kho hoặc doanh nghiệp cất đồ khi chưa hết 10 phút truy dấu.</li>
<li>Nếu cảnh sát tìm thấy xe của bạn trong lúc truy dấu, giữ nguyên hiện trạng. Không đổi quần áo, mặt nạ, tóc, khuôn mặt hay hình xăm của người tham gia.</li>
</ul></div>
<div class="box"><h3>Bên cảnh sát</h3><ul>
<li>Trong 10 phút đó, bật đèn đi tìm đối tượng.</li>
<li>Thấy người dân có trang phục, mặt nạ hoặc phương tiện khớp đặc điểm thì kiểm tra và mời về đồn làm việc.</li>
</ul></div>
</div>
</section>
</template>

<template id="law-tancong" data-short="Tấn Công PD" data-title="Luật Tấn Công PD và Vùng Đỏ" data-intro="Người dân được phép đối đầu với cảnh sát ở bất kỳ đâu, miễn là có lý do roleplay hợp lý và làm đúng quy trình. Cảnh sát cũng phải làm đúng phần của mình. Làm đúng luật này thì không ai phải khiếu nại." data-credit="Nội dung gốc thuộc về Le Bill và Johnson Larry.">
<section id="apdung">
<h2>Phạm vi áp dụng</h2>
<p class="lead">Luật này áp dụng ở mọi khu vực, trong mọi tình huống roleplay hoặc phó bản hợp lý.</p>
<div class="box"><ul>
<li>Bạn có thể đối đầu với PD ở <b>phó bản, đường phố, đồn PD, khu doanh nghiệp</b> và mọi nơi khác.</li>
<li>Đối tượng là cảnh sát UPD đang làm nhiệm vụ.</li>
<li>Một vụ giao tranh nhỏ dùng luật này. Nếu tình huống đã có luật riêng (ví dụ các vụ cướp), dùng luật riêng đó.</li>
</ul></div>
<h3>Vùng đỏ gồm những đâu?</h3>
<div class="box"><ul>
<li>Bãi hái nguyên liệu sản xuất chất cấm</li>
<li>Điểm ẩn</li>
<li>Điểm chế biến và đóng gói chất cấm</li>
<li>Điểm giao dịch chất cấm</li>
<li>Điểm rửa tiền bẩn</li>
</ul></div>
</section>

<section id="duoc">
<h2>Khi nào được tấn công PD?</h2>
<p class="lead">Chỉ cần câu chuyện của nhân vật bạn đủ thuyết phục. Dưới đây là các lý do được chấp nhận.</p>
<div class="two">
<div class="box ok"><h3>Được coi là hợp lý</h3><ul>
<li>PD ập vào vùng đỏ hoặc nơi bạn đang làm việc phi pháp và bạn không muốn bị bắt.</li>
<li>Bị chĩa súng, đe dọa tính mạng hoặc bị PD ra tay trước.</li>
<li>Giải cứu đồng đội hoặc người thân đang bị bắt ngay tại hiện trường.</li>
<li>Vụ cướp, phó bản đã lên kế hoạch mà PD đến chặn đường.</li>
<li>Mâu thuẫn có từ trước, đã được roleplay (ví dụ bị bắt oan, bị tịch thu đồ).</li>
<li>Xung đột băng đảng hoặc gia tộc kéo PD vào giữa.</li>
<li>Đang bị truy đuổi và bị dồn vào đường cùng.</li>
</ul></div>
<div class="box no"><h3>Không được coi là hợp lý</h3><ul>
<li>Nổ súng hoặc đánh người khi chưa có bất kỳ tình tiết roleplay nào.</li>
<li>Tấn công vì chuyện ngoài đời hoặc thù hằn OOC.</li>
<li>Dựa vào thông tin ngoài game (Discord, livestream, bạn bè nói) để phục kích PD.</li>
<li>Tấn công PD đang cấp cứu hoặc đang xử lý người khác khi bạn không liên quan.</li>
<li>Tiếp tục đánh PD khi bản thân đã bị còng hoặc đã bị hạ gục.</li>
<li>Camp xác, giấu xác, chọc ghẹo, xúc phạm, sỉ nhục, lăng mạ sĩ quan UPD.</li>
</ul></div>
</div>
<div class="alert">Nguyên tắc dễ nhớ: nếu bạn kể được trong 2 câu vì sao nhân vật của bạn phải ra tay, thì lý do đó hợp lý.</div>
</section>

<section id="quytrinh">
<h2>Quy trình một cuộc giao tranh</h2>
<p class="lead">Đi đúng thứ tự thì cả hai bên đều không bị xử oan.</p>
<div class="box"><ol class="steps">
<li><b>Chuẩn bị.</b> Đeo mặt nạ che hơn 50% khuôn mặt. Không đeo mặt nạ thì cảnh sát được xác định danh tính và truy nã ngay lập tức.</li>
<li><b>Mở màn bằng roleplay.</b> Nói rõ ý định bằng lời hoặc hành động (/me, /do hoặc thoại) để bên kia kịp phản ứng. Cảnh sát cũng phải hô khẩu lệnh, không được áp chế khi chưa có tình tiết.</li>
<li><b>Giao tranh.</b> Mỗi bên dùng các biện pháp trong khả năng nhân vật và nhớ giữ roleplay sợ hãi, đau đớn hợp lý. Không dùng bug hay lợi thế ngoài game.</li>
<li><b>Kết thúc.</b> Khi giao tranh xong và có dấu hiệu di tản, vác người, cứu người thì PD sẽ <b>áp sát và khống chế</b> các đối tượng còn lại ở hiện trường (bao gồm người tỉnh và ngất).</li>
<li><b>Sau giao tranh.</b> Ai còn ở lại sau 30 giây (tính từ lúc kết thúc) sẽ bị cảnh sát áp vào bắt và bật còi theo tình huống.<small>Khi ở lại hiện trường lúc PD đã áp sát, mọi người hãy tương tác theo tình huống RP.</small></li>
</ol></div>
<h3>Tòng phạm</h3>
<div class="box"><ul>
<li>Khi có giao tranh, <b>tất cả thành viên trong tình huống đều là tòng phạm</b>.</li>
<li>Người có liên quan xuất hiện trong tầm nhìn của cảnh sát sẽ bị bắt hoặc truy đuổi theo Luật Truy Đuổi, bật còi theo tình huống.</li>
</ul></div>
</section>

<section id="vungdo">
<h2>Quy định riêng cho vùng đỏ</h2>
<div class="two">
<div class="box"><h3>Khi PD tiến vào</h3><ul>
<li>Đội cảnh sát hú còi trước <b>0.30 miles</b> khi đến vùng đỏ, tính theo định vị GPS.</li>
<li>Cảnh sát thu giữ vật phẩm liên quan đến vùng đỏ và các vật phẩm nêu trong <b>Luật Tàng Trữ Chất Cấm</b>.</li>
</ul></div>
<div class="box"><h3>Khi bạn trốn thoát</h3><ul>
<li>Trốn thoát thành công thì chờ đủ <b>15 phút</b> mới được đổi trang phục, mặt nạ, phương tiện.</li>
<li>Trong 15 phút đó cảnh sát chỉ được bật đèn đi tìm. Gặp người dân có đặc điểm trùng khớp thì mời về đồn giải quyết.</li>
<li>Đổi đồ hoặc xe trước 15 phút: cảnh sát được <b class="r">còi 3 và bắt giữ</b>.</li>
</ul></div>
</div>
<h3>Truy đuổi</h3>
<div class="box"><ul>
<li>Áp dụng <b>Luật Truy Đuổi</b>, không giới hạn số xe PD tham gia.</li>
<li>Cảnh sát được gọi xe hỗ trợ khi xe truy đuổi bị hỏng hoặc không thể tiếp tục.</li>
<li>Phương tiện cố ý cản trở truy bắt hoặc giúp tội phạm bỏ trốn, nếu bị bắt, bị xử theo <b>Luật Phạt Chung</b>.</li>
<li>Nếu nhảy hoặc lao xuống nước, chuyển sang <b>Luật Truy Đuổi Xuống Nước</b>.</li>
</ul></div>
</section>

<section id="pd">
<h2>Quyền và giới hạn của cảnh sát</h2>
<div class="two">
<div class="box ok"><h3>Cảnh sát được</h3><ul>
<li>Leo lên xe để giữ an toàn và chờ hỗ trợ, nhất là khi bị áp đảo về số lượng hoặc bị vây quanh. Tùy tình huống mà quyết định.</li>
<li>Gọi hỗ trợ bất cứ lúc nào khi bị tấn công.</li>
<li>Dùng các vũ lực trong khả năng để bảo vệ tính mạng: súng điện, baton, giáp…</li>
<li>Bắt và còi những người ở lại hoặc có liên quan.</li>
</ul></div>
<div class="box no"><h3>Cảnh sát không được</h3><ul>
<li><b class="r">Dùng súng điện khi đang ở trong hoặc trên xe PD.</b></li>
<li>Áp chế khi giao tranh chưa có tình tiết roleplay rõ ràng.</li>
<li>Truy bắt người không có liên quan đến tình huống.</li>
</ul></div>
</div>
</section>

<section id="phat">
<h2>Xử lý vi phạm</h2>
<p class="lead">Người tham gia bị tịch thu đồ bẩn và vũ khí, sau đó xử lý như bên dưới.</p>
<div class="tablebox"><table>
<tr><th>Tình huống</th><th>Cách xử lý</th></tr>
<tr><td>Tấn công PD trong tình huống roleplay, phó bản nhỏ</td><td class="m">Tịch thu đồ bẩn + vũ khí</td></tr>
<tr><td>Không đeo mặt nạ</td><td>Cảnh sát xác định danh tính và truy nã ngay</td></tr>
<tr><td>Ở lại khu vực quá 30 giây sau khi kết thúc</td><td>Bị áp vào bắt, bật còi theo tình huống</td></tr>
<tr><td>Đổi đồ, mặt nạ, xe khi chưa đủ 15 phút (vùng đỏ)</td><td>Còi 3 và bắt giữ</td></tr>
<tr><td>Có người bị thương hoặc tử vong</td><td>Cộng thêm tội danh tương ứng theo Luật Phạt Chung</td></tr>
<tr><td>Camp xác, giấu xác, chọc ghẹo, xúc phạm sĩ quan UPD</td><td>Xử theo Luật Phạt Chung</td></tr>
</table></div>
</section>

<section id="khieunai">
<h2>Nếu bạn thấy bị xử oan</h2>
<div class="box"><ul>
<li>Khiếu nại hợp lệ cần có <b>bằng chứng cụ thể</b> (hình ảnh, video, giấy tờ).</li>
<li>Đến đồn cảnh sát và làm việc trực tiếp với người có thẩm quyền xử lý khiếu nại.</li>
<li>Bodycam của cảnh sát chỉ dùng cho bộ Nội vụ UPD khi xử lý khiếu nại giữa người dân và cảnh sát. Người dân không có quyền đòi xem.</li>
<li>Đừng giải quyết bằng cách đánh nhau tiếp. Tình huống đã kết thúc thì nói chuyện qua kênh khiếu nại.</li>
</ul></div>
<div class="alert">Vi phạm chuẩn mực roleplay (không roleplay trước khi ra tay, dùng thông tin ngoài game) sẽ bị xử lý OOC, kể cả khi bạn là người bị hại.</div>
</section>
</template>

<template id="law-emote" data-short="Luật Emote" data-title="Luật Emote" data-intro="Emote và dáng đi dùng để diễn cho đẹp, không dùng để chiếm lợi thế. Trang này giải thích rõ cái gì được, cái gì cấm và cảnh sát xử lý ra sao." data-credit="Nội dung gốc thuộc về Le Bill và Johnson Larry.">
<section id="apdung">
<h2>Áp dụng cho ai, ở đâu?</h2>
<div class="two">
<div class="box"><h3>Khu vực</h3><p>Bất kỳ khu vực nào trong thành phố, không có ngoại lệ.</p></div>
<div class="box"><h3>Đối tượng</h3><p>Tất cả thành viên tham gia trong tình huống, kể cả tòng phạm.</p></div>
</div>
<p class="lead" style="margin-top:16px">Emote ở đây là các hoạt ảnh bạn gọi bằng lệnh hoặc menu emote, và các kiểu dáng đi bạn chọn cho nhân vật.</p>
</section>

<section id="cam">
<h2>Điều nghiêm cấm</h2>
<p class="lead">Có hai nhóm bị cấm. Chỉ cần dính một nhóm là vi phạm.</p>
<div class="two">
<div class="box no"><h3>1. Dáng đi ảnh hưởng tốc độ di chuyển</h3>
<p>Dáng đi hoặc dáng chạy làm bạn <b>nhanh hơn hoặc chậm hơn</b> bình thường là bị cấm. Dáng đi chỉ để tạo kiểu, không được thay đổi tốc độ.</p></div>
<div class="box no"><h3>2. Emote có lợi cho bản thân và phá luật thành phố</h3>
<p>Emote giúp bạn làm điều mà nhân vật bình thường không thể, ví dụ:</p><ul>
<li><b>Xuyên tường</b>, xuyên sàn hoặc xuyên vật thể.</li>
<li><b>Tàng hình</b> hoặc biến mất khỏi tầm nhìn.</li>
<li><b>Ẩn người</b> ở chỗ mà người khác không thấy được.</li>
<li>Dùng emote để né còng, né khám hoặc thoát khỏi cảnh sát.</li>
</ul></div>
</div>
<div class="alert">Cảnh sát bắt tại trận: <b class="r">tịch thu toàn bộ đồ bẩn</b>.</div>
</section>

<section id="bang">
<h2>Cái gì được, cái gì không</h2>
<div class="tablebox"><table>
<tr><th>Việc bạn làm</th><th>Kết quả</th><th>Vì sao</th></tr>
<tr><td>Emote roleplay đời thường: nghe điện thoại, uống nước, hút thuốc, khoanh tay, ngồi ghế</td><td class="yes">Được</td><td>Chỉ để diễn, không đổi vị trí hay tầm nhìn</td></tr>
<tr><td>Giơ tay đầu hàng, quỳ hoặc nằm xuống theo lệnh cảnh sát</td><td class="yes">Được</td><td>Là một phần của roleplay bị bắt</td></tr>
<tr><td>Dáng đi tạo kiểu mà tốc độ vẫn như bình thường</td><td class="yes">Được</td><td>Không ảnh hưởng tốc độ di chuyển</td></tr>
<tr><td>Dáng đi hoặc chạy làm bạn nhanh hoặc chậm khác thường</td><td class="ban">Cấm</td><td>Ảnh hưởng tốc độ di chuyển</td></tr>
<tr><td>Emote đưa bạn xuyên tường, sàn hoặc vật thể</td><td class="ban">Cấm</td><td>Làm điều nhân vật không thể làm</td></tr>
<tr><td>Emote làm bạn tàng hình hoặc biến mất khỏi tầm nhìn</td><td class="ban">Cấm</td><td>Né cảnh sát và người chơi khác không công bằng</td></tr>
<tr><td>Emote giấu người trong chỗ không ai thấy</td><td class="ban">Cấm</td><td>Lợi dụng lỗi hoạt ảnh để ẩn nấp</td></tr>
<tr><td>Emote để hủy hoặc né hoạt ảnh bị còng, bị khám</td><td class="ban">Cấm</td><td>Có lợi cho bản thân, phá quy trình bắt giữ</td></tr>
</table></div>
</section>

<section id="tukiemtra">
<h2>Tự kiểm tra trong 3 câu</h2>
<p class="lead">Trước khi dùng emote hoặc dáng đi lạ, trả lời nhanh 3 câu này.</p>
<div class="box"><ol>
<li>Nó có làm tôi nhanh hơn hoặc chậm hơn bình thường không?</li>
<li>Nó có đưa tôi vào chỗ không thể vào, hoặc làm người khác không nhìn thấy tôi không?</li>
<li>Nó có giúp tôi tránh bị bắt, bị còng hoặc bị khám không?</li>
</ol></div>
<div class="alert">Chỉ cần một câu trả lời là "có" thì đừng dùng. Nếu không chắc, hãy tránh dùng khi đang có cảnh sát hoặc đang trong tình huống.</div>
</section>

<section id="xuly">
<h2>Cảnh sát xử lý thế nào?</h2>
<div class="box"><ul>
<li><b>Bắt tại trận:</b> cảnh sát tận mắt thấy bạn dùng emote vi phạm thì được tịch thu toàn bộ đồ bẩn.</li>
<li><b>Chỉ nghi vấn:</b> cảnh sát chưa chắc thì được nhờ TTC can thiệp kiểm tra, không tự quyết.</li>
<li><b>Sau khi TTC xác định vi phạm:</b> TTC toàn quyền xử lý theo luật thành phố.</li>
<li>Nếu bạn bị nghi oan, hãy đưa video hoặc hình ảnh làm bằng chứng cho TTC hoặc cảnh sát có thẩm quyền.</li>
</ul></div>
<h3>Hỗ trợ khi truy đuổi</h3>
<div class="box"><ul>
<li>Cảnh sát được gọi hỗ trợ <b>Air1 (trực thăng)</b> khi đối tượng vi phạm Luật Truy Đuổi.</li>
<li>Cảnh sát được gọi xe hỗ trợ khi xe truy đuổi bị hỏng hoặc không thể tiếp tục.</li>
</ul></div>
</section>

<section id="hoi">
<h2>Hỏi nhanh đáp gọn</h2>
<h3>Nhảy múa, vẫy tay, tạo dáng có bị phạt không?</h3>
<p>Không, miễn là emote đó không làm bạn di chuyển nhanh chậm khác thường và không giúp bạn né cảnh sát hay phá luật.</p>
<h3>Tôi vô tình dùng nhầm emote thì sao?</h3>
<p>Luật xử lý tại trận khi cảnh sát thấy rõ. Nếu bạn thấy mình dùng nhầm, hãy thoát emote ngay. Nếu bị nghi vấn, cảnh sát sẽ nhờ TTC kiểm tra chứ không tự phạt.</p>
<h3>Cảnh sát có bị cấm dùng emote kiểu này không?</h3>
<p>Điều cấm là về hành vi lợi dụng emote để chiếm lợi thế, nên áp dụng với mọi người trong tình huống, cả dân lẫn cảnh sát.</p>
</section>
</template>

`;
