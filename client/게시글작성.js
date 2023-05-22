// 모달 창 띄우기
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  }
  
  // 모달 창 닫기
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  // "글쓰기" 버튼 클릭 시 모달 창 띄우기
  const writeButton = document.getElementById('writeButton');
  writeButton.addEventListener('click', showModal);
  
  // "네" 버튼 클릭 시 모달 창 닫기
  const confirmButtonYes = document.getElementById('confirm-button');
  confirmButtonYes.addEventListener('click', closeModal);
  
  // "아니오" 버튼 클릭 시 모달 창 닫기
  const confirmButtonNo = document.getElementById('cancel-button');
  confirmButtonNo.addEventListener('click', closeModal);