
import * as ensure from '../ensure'
import {OnigRegExp, OnigScanner} from 'oniguruma'

export default {
  conditions: {

    $regex: function (d, q, p) {
      // return !!d.match(new RegExp(q, p.$options))
      const regex = new OnigRegExp(q)
      return regex.testSync(d)
    }

  }
}
