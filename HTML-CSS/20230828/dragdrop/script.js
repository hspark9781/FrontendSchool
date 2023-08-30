const dropTarget = document.querySelector('.drop-target');
const dragItems = document.querySelectorAll('.drag-item');

dragItems.forEach((item) => {
    item.addEventListener('dragstart', () => {
        setTimeout(() => {
            item.classList.add('dragging');
        }, 0);
    });
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
});

function handleDragOver(e) {
    e.preventDefault();
    const draggingItem = dropTarget.querySelector('.dragging');
    const notDraggingItem =  Array.from(dropTarget.querySelectorAll('.drag-item:not(.dragging)'));

    const nextItem = notDraggingItem.find((item) => {
        // clientY : 뷰포트 내 마우스 y자표
        // offsetTop : 뷰포트에서 요소까지의 y좌표
        // offsetHeight : 요소의 높이(border 포함)
        return e.clientY <= item.offsetTop + item.offsetHeight / 2;
    });
    // console.log(nextItem);
    dropTarget.insertBefore(draggingItem, nextItem);
}

dropTarget.addEventListener('dragover', handleDragOver);