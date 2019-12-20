window.h = {
  showWaitScreen: (waitScreen) => h.show(waitScreen),
  hideWaitScreen: (waitScreen) => h.hide(waitScreen),
  show: (element) => h.removeClass(element, 'hidden'),
  hide: (element) => h.addClass(element, 'hidden'),
  addClass: (element, className) => h.handleClass(element, 'add', className),
  removeClass: (element, className) => h.handleClass(element, 'remove', className),
  handleClass: (element, operation, className) => element.classList[operation](className),
  createFragment: () => document.createDocumentFragment(),
  setText: (element, text) => element.textContent = text,
  getText: (element) => element.textContent,
  setValue: (element, value) => element.value = value,
  getValue: (element) => element.value,
  setPhoto: (element, photo) => element.src = photo,
  countPositionPrice: (price, count) => +price * +count,
  glueNumber: (string) => string.search(/ /g) ? parseInt(string.split(' ').join('')) : parseInt(string),
  addListOfEvents: (list, filter) => list
    .filter((el) => el[filter])
    .forEach((e) => h.eventAdd(e.el, e.ev, e.listener)),
  eventAdd: (element, event, handler) => element.addEventListener(event, handler),
};
;{
  const option = {
    module: document.querySelector('.basket__body'),
    waitScreen: document.querySelector('.wait-screen'),
    template: document.querySelector('template').content,
    dataPath: '/js/data.json',
  };
  const options = Object.assign(option, {
    fullPositionsWrapper: option.module.querySelector('.basket__table tbody'),
    partialPositionsWrapper: option.module.querySelector('.basket__order-result'),
    partialPositionsInfo: option.module.querySelector('.basket__order-result-info'),
    specialCodeConfirmBtn: option.module.querySelector('.basket__order-promo-confirm'),
    specialCodeInput: option.module.querySelector('.basket__order-promo-input'),
    discountInfo: option.module.querySelector('.basket__order-result-discount-number'),
    deliveryInfo: option.module.querySelector('.basket__order-result-delivery-number'),
    totalPriceInfo: option.module.querySelector('.basket__order-total-number'),
  });
  let basket = (options) => {
    const u = {
      renderPosition: (template, mode, {articleSelector, nameSelector, priceSelector, oldPriceSelector, countSelector, photoSelector, finalPriceSelector}, {article, fullName, price, oldPrice, count, photo}) => {
        const position = template.cloneNode(true);

        h.setText(position.querySelector(articleSelector), `Артикул: ${article}`);
        h.setText(position.querySelector(nameSelector), fullName);
        h.setText(position.querySelector(priceSelector), `${price} ₽`);
        h.setText(position.querySelector(countSelector), `${count} штуки`);

        if (mode === 'full') {
          const finalPrice = u.getLocalFinalPrice(price, count);

          h.setText(position.querySelector(oldPriceSelector), oldPrice ? `${oldPrice} ₽` : '');
          h.setPhoto(position.querySelector(photoSelector), photo);
          h.setText(position.querySelector(finalPriceSelector), `${finalPrice} ₽`);
          h.setValue(position.querySelector(countSelector), count);
        }

        return position;
      },
      getLocalFinalPrice: (price = 0, count = 0) => h.countPositionPrice(h.glueNumber(price), count).toLocaleString(),
      calculateTotalPrice: () => {
        const positions = options.fullPositionsWrapper.querySelectorAll('.basket__table-tr');
        let totalPrice = 0;

        if (!positions[0]) return totalPrice;
        if (positions.length > 1) totalPrice = [...positions].reduce((prev, cur) =>
          (h.glueNumber(h.getText(prev.querySelector('.basket__product-price'))) *
            +h.getValue(prev.querySelector('.basket__product-count'))) +
          (h.glueNumber(h.getText(cur.querySelector('.basket__product-price'))) *
            +h.getValue(cur.querySelector('.basket__product-count'))));
        if (positions.length === 1) totalPrice = (h.glueNumber(h.getText(positions[0].querySelector('.basket__product-price'))) *  +h.getValue(positions[0].querySelector('.basket__product-count')));

        totalPrice += 490;

        return totalPrice;
      },
      setTotalPrice: (price) => h.setText(options.totalPriceInfo, `${price} ₽`),
      setDiscountInfo: (message) => h.setText(options.discountInfo, message),
      setDelivery: () => h.setText(options.deliveryInfo, options.fullPositionsWrapper.children.length > 0 ? '+ 490р' : 0),
      rerenderTotalPrice: (totalPrice = u.calculateTotalPrice()) => u.setTotalPrice(totalPrice),
    };
    const l = {
      fullPositionsClickHandler: () => {},
      onButtonAddSubClick: () => {},
      onCountChange: () => {},
      onRemovePositionClick: () => {},
      onSpecialCodeConfirm: () => {},
    };
    const module = () => {
      module.initiate = ({waitScreen, dataPath, template, fullPositionsWrapper, partialPositionsWrapper, partialPositionsInfo, specialCodeConfirmBtn, discountInfo, specialCodeInput}) => {
        const w = () => {
          w.setWaitScreen = () => {
            h.showWaitScreen(waitScreen);

            return w;
          };
          w.handleData = () => {
            fetch(dataPath)
              .then(result => result.json())
              .then(result => w.renderData(result))
              .then(h.hideWaitScreen(waitScreen))
              .then(
                eventListeners()
                .create(discountInfo, specialCodeInput, partialPositionsWrapper)
                .listInitiate(fullPositionsWrapper, specialCodeConfirmBtn)
                .add()
              )
              .catch(error => {
                h.hideWaitScreen(waitScreen);
                alert(error);
              });

            return w;
          };
          w.renderData = ({positions}) => {
            const s = () => {
              let fullPositionFragment, partialPositionFragment, fullPositions, partialPositions;
              const renderFullPosition = u.renderPosition.bind(null, template.querySelector('.basket__table-tr'), 'full', {
                articleSelector: '.basket__product-article',
                nameSelector: '.basket__product-name',
                priceSelector: '.basket__product-price',
                oldPriceSelector: '.basket__product-old-price',
                countSelector: '.basket__product-count',
                photoSelector: '.basket__product-photo',
                finalPriceSelector: '.basket__table-product-final-price',
              });
              const renderPartialPosition = u.renderPosition.bind(null, template.querySelector('.basket__order-position'), 'partial', {
                articleSelector: '.basket__order-position-article',
                nameSelector: '.basket__order-position-name',
                priceSelector: '.basket__order-position-price',
                countSelector: '.basket__order-position-count',
              });

              s.createFragments = () => {
                fullPositionFragment = h.createFragment();
                partialPositionFragment = h.createFragment();

                return s;
              };
              s.createPositions = () => {
                fullPositions = positions.map(renderFullPosition);
                partialPositions = positions.map(renderPartialPosition);

                return s;
              };
              s.fillFragments = () => {
                fullPositions.forEach((position) => fullPositionFragment.append(position));
                partialPositions.forEach((position) => partialPositionFragment.append(position));

                return s;
              };
              s.insertFragments = () => {
                fullPositionsWrapper.append(fullPositionFragment);
                partialPositionsWrapper.insertBefore(partialPositionFragment, partialPositionsInfo);

                return s;
              };
              s.calculateTotalPrice = () => {
                const totalPrice = u.calculateTotalPrice();
                u.setTotalPrice(totalPrice);

                return s;
              };
              s.calculateDelivery = () => {
                u.setDelivery();

                return s;
              };

              return s;
            };

            s()
              .createFragments()
              .createPositions()
              .fillFragments()
              .insertFragments()
              .calculateTotalPrice()
              .calculateDelivery();

            return w;
          };

          return w;
        };

        w()
          .setWaitScreen()
          .handleData();

        return module;
      };

      return module;
    };
    const eventListeners = () => {
      let listenersList = [];

      eventListeners.create = (discountInfo, specialCodeInput, partialPositionsWrapper) => {
        l.onSpecialCodeConfirm = () => {
          let code;
          const w = () => {
            w.checkCode = () => {
              code = specialCodeInput.value;

              return w;
            };
            w.checkConditions = (condition, stateA, stateB) => {
              condition ? stateA() : stateB();

              return w;
            };
            w.setWrongCode = () => {
              u.setDiscountInfo('Промокод неверный');
              u.rerenderTotalPrice();

              return w;
            };
            w.setTrueCode = () => {
              const totalPrice = u.calculateTotalPrice();
              const discount = totalPrice * 0.2;
              u.setDiscountInfo(`${discount} ₽`);
              u.rerenderTotalPrice(totalPrice - discount);

              return w;
            };

            return w;
          };

          w()
            .checkCode()
            .checkConditions(code === 'NY2020', w.setTrueCode, w.setWrongCode);
        };
        l.onRemovePositionClick = (target) => {
          const position = target.parentElement.parentElement;
          position.remove();
          const article = h.getText(position.querySelector('.basket__product-article')).split(': ')[1];
          const partialPositions = partialPositionsWrapper.querySelectorAll('.basket__order-position-article');
          const removePosition = [...partialPositions].filter((pos) => h.getText(pos).split(': ')[1] === article);
          removePosition[0].parentElement.parentElement.remove();

          u.rerenderTotalPrice();
          u.setDelivery();
        };
        l.onButtonAddSubClick = (target, type, value) => {
          const input = target.parentElement.querySelector('.basket__product-count');
          if (!value) value = type === 'add' ? +input.value + 1 : +input.value - 1;

          input.value = value;
          u.rerenderTotalPrice();

          const count = +input.value;
          if (count <= 0) {
            l.onRemovePositionClick(target.parentElement);
            return;
          }

          const wrapper = target.parentElement.parentElement.parentElement;
          const unHandlePrice = h.getText(wrapper.querySelector('.basket__product-price')).split(' ₽')[0] || 0;

          const price = u.getLocalFinalPrice(unHandlePrice, count);
          h.setText(wrapper.querySelector('.basket__table-product-final-price'), `${price} ₽`);


        };
        l.fullPositionsClickHandler = ({target}) => {
          if (target.classList.contains('basket__table-product-remove')) l.onRemovePositionClick(target);
          if (target.classList.contains('basket__order-promo-confirm')) l.onSpecialCodeConfirm();
          if (target.classList.contains('basket__product-add')) l.onButtonAddSubClick(target, 'add');
          if (target.classList.contains('basket__product-sub')) l.onButtonAddSubClick(target, 'sub');
        };

        return eventListeners;
      };
      eventListeners.listInitiate = (fullPositionsWrapper, specialCodeConfirmBtn) => {
        listenersList = [
          {el: fullPositionsWrapper, ev: 'click', listener: l.fullPositionsClickHandler, 'initiate': true},
          {el: specialCodeConfirmBtn, ev: 'click', listener: l.onSpecialCodeConfirm, 'initiate': true},
        ];

        return eventListeners;
      };
      eventListeners.add = () => {
        h.addListOfEvents(listenersList, 'initiate');

        return eventListeners;
      };

      return eventListeners;
    };

    module()
      .initiate(options)
  };
  basket = basket.bind(null, options);
  document.addEventListener('DOMContentLoaded', basket);
}
