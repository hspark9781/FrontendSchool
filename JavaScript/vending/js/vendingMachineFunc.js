class VendingMachineFunc {
    constructor() {
        // section 1 요소 선택
        const vMachine = document.querySelector('.section1');
        this.balance = vMachine.querySelector(".bg-box p");
        this.itemList = vMachine.querySelector('.cola-list');
        this.inputCostEl = vMachine.querySelector('#input-money');
        this.btnPut = vMachine.querySelector('#input-money+.btn');
        this.btnReturn = vMachine.querySelector('.bg-box+.btn');
        this.btnGet = vMachine.querySelector('.btn-get');
        this.stagedList = vMachine.querySelector('.get-list');

        // section 2 요소 선택
        const myInfo = document.querySelector('.section2');
        this.myMoney = myInfo.querySelector('.bg-box p');

        // section3 요소 선택
        const getInfo = document.querySelector('.section3');
        this.getList = getInfo.querySelector('.get-list');
        this.txtTotal = getInfo.querySelector('.total-price');
    }

    setup() {
        this.bindEvents();
    }

    // 이벤트를 붙입니다.
    bindEvents() {
        /**
         * 1.입금 버튼 기능
         * 소지금 === 소지금 - 입금액
         * 잔액 === 기존의 잔액 + 입금액
         * 입금액이 소지금보다 많으면 "소지금이 부족합니다." 경고창을 띄웁니다.
         * 입금액 인풋창은 초기화 되어야합니다.
         */
        this.btnPut.addEventListener('click', (event) => {
            // 사용자 입력값
            const inputCost = parseInt(this.inputCostEl.value);
            // 현재 사용자의 돈
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));
            // 현재 자판기 잔액
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

            // 입금액이 있고, 소지금 보다 적거나 같다면
            if (inputCost) {
                if (inputCost <= myMoneyVal && inputCost > 0) {

                    // Intl 객체를 통해서 사용자 국가에서 사용하는 포멧으로 숫자를 변경합니다.
                    this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + ' 원';

                    this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + ' 원';
                } else {
                    alert("소지금이 부족합니다.");
                }
                // 사용자가 입력한 입금액을 초기화 합니다.
                this.inputCostEl.value = null;
            }
        });

        /**
         * 2. 거스름돈 반환 기능만들기
         * 반환 버튼을 누르면 소지금 === 소지금 + 잔액
         * 잔액창은 초기화 됩니다.
         */

        this.btnReturn.addEventListener('click', () => {
            // 현재 사용자의 돈
            const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));
            // 현재 자판기 잔액
            const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

            if (balanceVal) {
                this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal + balanceVal) + ' 원';

                this.balance.textContent = null;
            }
        });

        /**
         * 3. 자판기 메뉴 기능
         * 콜라를 누르면 잔액 === 잔액 - 콜라 가격
         * 콜라가격보다 잔액이 적다면 "잔액이 부족합니다." 경고창 출력
         * 콜라가 장바구니에 등록 되어야합니다
         * 콜라의 data-count 값을 -1 합니다
         * 만약 콜라의 data-count 값이 0이라면 button 요소에 disabled 속성이 추가되고, 콜라 템플릿에 strong 태그가 추가되어야 합니다.
         */
        const colaBtns = this.itemList.querySelectorAll('button');

        colaBtns.forEach((colaBtn) => {
            colaBtn.addEventListener('click', (event) => {

                // 현재 잔액
                const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

                // 클릭한 콜라의 가격
                const targetElPrice = parseInt(colaBtn.dataset.price);
                const stagedListItem = this.stagedList.querySelectorAll('li');
                let isStaged = false;

                // 잔액이 콜라 가격보다 많거나 동일하다면
                if (balanceVal >= targetElPrice) {
                    this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + ' 원';

                    for (const item of stagedListItem) {
                        // 선택한 콜라가 이미 장바구니에 존재하는 경우
                        if (item.dataset.item === colaBtn.dataset.item) {
                            const itemTxt = item.querySelector('strong');
                            // 장바구니 콜라의 카운트를 1 증가
                            itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + 1;
                            isStaged = true;
                            break;
                        }
                    }

                    // 만약 처음 선택한 콜라라면 콜라를 장바구니에 담기
                    if (!isStaged) {
                        this.stagedItemGenerator(colaBtn);
                    }

                    colaBtn.dataset.count--;

                    // 만약 콜라의 카운트가 0 이라면
                    if (parseInt(colaBtn.dataset.count) === 0) {
                        // disabled 속성 추가 + strong 품절 태그 추가
                        colaBtn.disabled = "disabled";
                        colaBtn.insertAdjacentHTML('afterbegin', '<strong class="soldout">품절</strong>');
                    }

                } else {
                    alert('잔액이 부족합니다. 돈을 더 입금해주세요.');
                }
            });
        })
    }
}


export default VendingMachineFunc;