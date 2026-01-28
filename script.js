// 1. คลังข้อมูลสินค้า (คุณสามารถเพิ่มหรือลดรายการในเครื่องหมาย [ ] ได้ตามต้องการ)
const products = [
    {
        name: "ZT47640 No.1",
        partNo: "12345",
        maker: "FPJA",
        qty: "1,000",
        แผ่นรองโมลด์: "300x200",
        updateDate: "2026-01-28",
        img: "img/pic4.jpg",      // ใส่ที่อยู่รูปจิ๋ว
        drawing: "dwg/31.TTM-25093 GHS Contact Rubber WF21220 No.4 WF21240 No.4 (300T No.3).pdf",  // ใส่ที่อยู่ไฟล์ PDF
        viewImg: "img mold/S__5611526.jpg"     // ใส่ที่อยู่รูปภาพประกอบ
    },
    {
        name: "ZT47640 No.2",
        partNo: "12345",
        maker: "FPJA",
        qty: "1,000",
        img: "img/pic4.jpg",
        drawing: "drawing2.pdf",
        viewImg: "image2.jpg"
    },
    {
        name: "WF21220 No.4",
        partNo: "12345",
        maker: "FPJA",
        qty: "1,000",
        img: "img/pic4.jpg",
        drawing: "drawing2.pdf",
        viewImg: "image2.jpg"
    },
    {
        name: "WF21220 No.5",
        partNo: "12345",
        maker: "FPJA",
        qty: "1,000",
        img: "img/pic4.jpg",
        drawing: "drawing2.pdf",
        viewImg: "image2.jpg"
    },
    {
        name: "WF21220 No.7",
        partNo: "12345",
        maker: "FPJA",
        qty: "1,000",
        img: "img/pic4.jpg",
        drawing: "drawing2.pdf",
        viewImg: "image2.jpg"
    },
    {
        name: "ZS08900",
        partNo: "12345",
        maker: "FPJA",
        qty: "1,000",
        img: "img/pic4.jpg",
        drawing: "drawing2.pdf",
        viewImg: "image2.jpg"
    },
    {
        name: "ZS08910",
        partNo: "12345",
        maker: "FPJA",
        qty: "1,000 Shot",
        img: "img/pic4.jpg",
        drawing: "drawing2.pdf",
        viewImg: "image2.jpg"
    },
    {
        name: "VJC3880",
        partNo: "12345",
        maker: "FPJA",
        qty: "1,000",
        img: "img/pic4.jpg",
        drawing: "drawing2.pdf",
        viewImg: "image2.jpg"
    }
];

// 2. ฟังก์ชันสำหรับสร้างรายการสินค้า (เพิ่ม index และ onclick)
function renderProducts() {
    const productContainer = document.getElementById('product-list');
    
    // ใส่ index เข้าไปใน map(product, index)
    const productHTML = products.map((product, index) => `
        <div class="product-card">
            <div class="product-info">
                <div class="img-wrapper">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="text-details" style="cursor: pointer;" onclick="openModal(${index})">
                    <span class="p-name">${product.name}</span>
                    <span class="p-sub">Part Number: ${product.partNo}</span>
                </div>
            </div>
            <div class="product-actions">
                <a href="${product.drawing}" target="_blank" class="action-link draw">📁 Drawing</a>
                <a href="${product.viewImg}" target="_blank" class="action-link view">🖼️ Picture</a>
            </div>
        </div>
    `).join('');

    productContainer.innerHTML = productHTML;
}

// 3. ฟังก์ชันสำหรับเปิด Modal (ป๊อปอัพแสดงรายละเอียด)
function openModal(index) {
    const item = products[index]; // ดึงข้อมูลจาก array ตามลำดับที่คลิก
    const modal = document.getElementById('infoModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    // นำข้อมูลไปใส่ใน Modal
    title.innerText = item.name;
    body.innerHTML = `
       <div class="detail-item">
            <strong>Part Number :</strong> <span>${item.partNo}</span>
        </div>
        <div class="detail-item">
            <strong>ผู้ผลิต (Maker) :</strong> <span>${item.maker || 'FPJA'}</span>
        </div>
        <div class="detail-item">
            <strong>จำนวนการผลิต :</strong> <span>${item.qty || '0'} Shot</span>
        </div>
        <div class="detail-item">
            <strong>แผ่นรองโมลด์ :</strong> <span>${item.แผ่นรองโมลด์ || '-'} mm</span>
        </div>
        <div class="detail-item">
            <strong>วันที่แก้ไขล่าสุด :</strong> <span>${item.updateDate || '-'}</span>
        </div>
    `;

    modal.style.display = 'block'; // แสดง Modal
}

// 4. ตั้งค่าเหตุการณ์เมื่อโหลดหน้าเว็บ
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    const toggleBtn = document.getElementById('toggleBtn');
    const itemList = document.getElementById('itemList');
    const arrowIcon = document.getElementById('arrowIcon');
    const modal = document.getElementById('infoModal');
    const closeBtn = document.querySelector('.close-modal');

    // เปิด-ปิดรายการ Master List
    toggleBtn.addEventListener('click', () => {
        itemList.classList.toggle('hidden');
        if (arrowIcon) arrowIcon.classList.toggle('rotate');
    });

    // ปิด Modal เมื่อคลิกเครื่องหมาย X
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };
    }

    // ปิด Modal เมื่อคลิกพื้นหลัง (พื้นที่นอกกล่องขาว)
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

});
