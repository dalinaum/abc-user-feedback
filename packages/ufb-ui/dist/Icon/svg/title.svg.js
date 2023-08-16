'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgTitle = function SvgTitle(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 123 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.637 19.027a6.952 6.952 0 0 1-1.886-.265 5.134 5.134 0 0 1-1.688-.877c-.508-.408-.916-.943-1.225-1.605-.297-.662-.446-1.473-.446-2.433V6.915c0-.176.082-.264.248-.264H5.22c.166 0 .248.088.248.264v6.321c0 .96.199 1.666.596 2.118.408.453.932.679 1.572.679.629 0 1.142-.226 1.539-.679.408-.452.612-1.158.612-2.118v-6.32c0-.177.088-.265.265-.265h2.565c.176 0 .264.088.264.264v6.934c0 .96-.154 1.77-.463 2.432-.298.662-.7 1.197-1.208 1.605a5.107 5.107 0 0 1-1.704.877 6.776 6.776 0 0 1-1.87.265ZM18.237 18.96c-.993 0-1.826-.198-2.499-.595a3.314 3.314 0 0 1-1.44-1.704c-.066-.166-.005-.265.182-.298l1.986-.414c.143-.033.254.017.331.149.154.242.348.42.58.53.23.11.485.165.76.165.254 0 .458-.039.613-.116.154-.077.231-.193.231-.348 0-.12-.066-.231-.198-.33-.122-.1-.364-.199-.728-.298l-.331-.083c-1.137-.298-1.936-.712-2.4-1.241-.452-.54-.678-1.147-.678-1.82 0-.53.149-.998.447-1.407.309-.408.733-.728 1.274-.96.551-.231 1.18-.347 1.886-.347.938 0 1.704.182 2.3.546.607.353 1.048.905 1.324 1.655.066.176.006.281-.182.314l-1.92.447c-.143.033-.248-.022-.314-.165a1.206 1.206 0 0 0-.447-.464c-.165-.11-.38-.165-.645-.165a.973.973 0 0 0-.496.116.342.342 0 0 0-.199.33c0 .276.326.497.976.662l.315.083c1.158.287 1.958.668 2.399 1.142.441.474.662 1.087.662 1.837 0 .562-.166 1.053-.497 1.472-.32.408-.766.728-1.34.96-.562.232-1.213.348-1.952.348ZM27.468 18.96c-.927 0-1.738-.193-2.433-.579a4.156 4.156 0 0 1-1.605-1.605c-.375-.695-.563-1.489-.563-2.383 0-.893.188-1.682.563-2.366a4.157 4.157 0 0 1 1.605-1.605c.695-.386 1.506-.579 2.433-.579.981 0 1.803.215 2.465.645a3.857 3.857 0 0 1 1.473 1.787c.33.75.469 1.628.413 2.631-.01.166-.104.249-.28.249h-5.66c.22.893.756 1.34 1.605 1.34.662 0 1.147-.21 1.456-.629.1-.11.215-.149.348-.116l2.118.712c.165.077.21.193.132.347-.408.75-.982 1.297-1.72 1.639a5.457 5.457 0 0 1-2.35.512Zm-.034-6.784c-.849 0-1.367.453-1.555 1.357h3.012c-.177-.904-.662-1.357-1.456-1.357ZM33.5 18.795c-.176 0-.264-.088-.264-.265v-8.273c0-.166.088-.248.265-.248h2.068c.188 0 .281.082.281.248l.05.893a2.611 2.611 0 0 1 1.125-.96 3.581 3.581 0 0 1 1.787-.28c.11.01.21.027.298.049.155.055.232.154.232.298v2.267c0 .176-.1.248-.298.215a3.224 3.224 0 0 0-.38-.05 2.847 2.847 0 0 0-.464-.033c-.287 0-.585.066-.893.199-.31.121-.569.32-.778.595-.21.276-.315.63-.315 1.06v4.02c0 .177-.088.265-.264.265H33.5ZM41.02 18.795c-.177 0-.265-.088-.265-.265V6.914c0-.176.088-.264.265-.264h7.727c.177 0 .265.088.265.264v2.234c0 .166-.088.248-.265.248H43.85v2.333h4.104c.176 0 .265.089.265.265v2.234c0 .165-.089.248-.265.248h-4.104v4.054c0 .177-.088.265-.264.265H41.02ZM54.13 18.96c-.926 0-1.737-.193-2.432-.579a4.156 4.156 0 0 1-1.605-1.605c-.375-.695-.563-1.489-.563-2.383 0-.893.188-1.682.563-2.366a4.157 4.157 0 0 1 1.605-1.605c.695-.386 1.506-.579 2.432-.579.982 0 1.804.215 2.466.645a3.856 3.856 0 0 1 1.472 1.787c.331.75.47 1.628.414 2.631-.01.166-.105.249-.281.249h-5.66c.221.893.756 1.34 1.606 1.34.662 0 1.147-.21 1.456-.629.1-.11.215-.149.347-.116l2.118.712c.166.077.21.193.133.347-.408.75-.982 1.297-1.721 1.639a5.457 5.457 0 0 1-2.35.512Zm-.033-6.784c-.85 0-1.368.453-1.555 1.357h3.011c-.176-.904-.662-1.357-1.456-1.357ZM64.052 18.96c-.927 0-1.738-.193-2.433-.579a4.156 4.156 0 0 1-1.605-1.605c-.375-.695-.562-1.489-.562-2.383 0-.893.187-1.682.563-2.366a4.157 4.157 0 0 1 1.605-1.605c.695-.386 1.505-.579 2.432-.579.982 0 1.804.215 2.465.645a3.857 3.857 0 0 1 1.473 1.787c.331.75.469 1.628.414 2.631-.011.166-.105.249-.281.249h-5.66c.221.893.756 1.34 1.605 1.34.662 0 1.148-.21 1.457-.629.099-.11.215-.149.347-.116l2.118.712c.166.077.21.193.133.347-.409.75-.982 1.297-1.721 1.639a5.457 5.457 0 0 1-2.35.512Zm-.033-6.784c-.85 0-1.368.453-1.556 1.357h3.012c-.176-.904-.662-1.357-1.456-1.357ZM73.46 18.96c-.816 0-1.533-.187-2.15-.562a3.95 3.95 0 0 1-1.423-1.605c-.342-.695-.513-1.495-.513-2.4 0-.915.17-1.71.513-2.382.342-.684.816-1.214 1.423-1.589.617-.386 1.334-.579 2.15-.579.916 0 1.683.281 2.3.844V6.65c0-.177.089-.265.265-.265h2.45c.176 0 .264.088.264.265v11.88c0 .177-.088.265-.264.265H76.39c-.177 0-.265-.088-.265-.265l-.033-.777c-.64.805-1.517 1.207-2.631 1.207Zm.729-2.614c.54 0 .976-.182 1.307-.546.331-.364.496-.833.496-1.407 0-.573-.165-1.036-.496-1.39-.33-.364-.767-.546-1.307-.546-.54 0-.976.182-1.307.547-.331.353-.497.816-.497 1.39 0 .573.166 1.042.497 1.406.33.364.766.546 1.307.546ZM85.942 18.96c-1.114 0-1.991-.402-2.631-1.207l-.033.777c0 .177-.094.265-.282.265h-2.068c-.177 0-.265-.088-.265-.265V6.65c0-.177.088-.265.265-.265h2.449c.176 0 .265.088.265.265v4.037c.617-.563 1.384-.844 2.3-.844.816 0 1.528.193 2.134.58a3.798 3.798 0 0 1 1.44 1.588c.342.673.513 1.467.513 2.383 0 .904-.171 1.704-.513 2.399a3.91 3.91 0 0 1-1.44 1.605c-.606.375-1.318.563-2.134.563Zm-.728-2.614c.54 0 .976-.182 1.307-.546.33-.364.496-.833.496-1.407 0-.573-.165-1.036-.496-1.39-.331-.364-.767-.546-1.307-.546-.54 0-.977.182-1.308.547-.33.353-.496.816-.496 1.39 0 .573.166 1.042.496 1.406.331.364.767.546 1.308.546ZM95.146 18.96c-.816 0-1.533-.187-2.15-.562a3.949 3.949 0 0 1-1.424-1.605c-.342-.695-.513-1.495-.513-2.4 0-.915.171-1.71.513-2.382.342-.684.816-1.214 1.423-1.589.618-.386 1.335-.579 2.151-.579.552 0 1.048.105 1.49.315.452.198.833.49 1.141.877l.033-.778c0-.166.089-.248.265-.248h2.085c.177 0 .265.082.265.248v8.273c0 .177-.088.265-.265.265h-2.085c-.176 0-.265-.088-.265-.265l-.033-.777c-.64.805-1.517 1.207-2.63 1.207Zm.728-2.614c.541 0 .977-.182 1.308-.546.33-.364.496-.833.496-1.407 0-.573-.165-1.036-.496-1.39-.331-.364-.767-.546-1.308-.546-.54 0-.976.182-1.307.547-.33.353-.496.816-.496 1.39 0 .573.165 1.042.496 1.406.331.364.767.546 1.307.546ZM106.453 18.96c-.927 0-1.732-.193-2.416-.579a4.042 4.042 0 0 1-1.589-1.605c-.364-.684-.546-1.478-.546-2.383 0-.904.182-1.693.546-2.366a4.043 4.043 0 0 1 1.589-1.605c.684-.386 1.489-.579 2.416-.579.981 0 1.842.215 2.581.645.75.42 1.285 1.104 1.605 2.052.055.188-.006.298-.182.331l-2.052.58c-.154.032-.27-.023-.347-.166a1.5 1.5 0 0 0-.596-.629 1.735 1.735 0 0 0-.844-.199c-.563 0-.987.188-1.274.563-.276.364-.414.822-.414 1.373 0 .541.138 1.004.414 1.39.287.376.711.563 1.274.563.309 0 .59-.066.844-.198.254-.144.452-.37.596-.679.088-.154.198-.215.331-.182l2.233.563c.188.033.243.143.166.33-.342.938-.905 1.639-1.688 2.102-.772.452-1.655.678-2.647.678ZM112.438 18.795c-.176 0-.264-.088-.264-.265V6.65c0-.177.088-.265.264-.265h2.449c.177 0 .265.088.265.265v6.304l2.449-2.796a.407.407 0 0 1 .314-.15h2.896c.11 0 .182.034.215.1.033.055.006.127-.082.215l-2.615 2.714 2.962 5.444c.055.088.066.165.033.231-.033.055-.105.083-.215.083h-2.747a.333.333 0 0 1-.314-.182l-1.804-3.409-1.092 1.125v2.201c0 .177-.088.265-.265.265h-2.449Z"
  })));
};

exports.ReactComponent = SvgTitle;
