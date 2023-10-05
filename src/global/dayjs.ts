import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import customParseFormat from "dayjs/plugin/customParseFormat";

// 全局本地化
dayjs.locale("zh-cn");
// 增加解析字符串的dayjs插件
dayjs.extend(customParseFormat);

export default dayjs;
