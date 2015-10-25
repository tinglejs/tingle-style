/**
 * css util for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 *
 * Usage:
 *     const {createStyleContext} = require('tingle-style');
 *     let componentStyle = createStyleContext('tGroupList');
 *     componentStyle.addRule(`
 *         body{
 *             background-color: red;
 *         }
 *     `);
 */
const doc = document;
const headEl  = doc.getElementsByTagName('head')[0];

//插入CSS Rule
let addCSSRule = (styleEl, rule) => {
    styleEl.appendChild(doc.createTextNode(rule));
};

// 删除多余的缩进 更方便阅读
let clearRuleIndent = (rule) => {
    // 为了取出正确的首行缩进数量 需要去掉第一行的换行
    rule = rule.replace(/^\n/, '');
    let whiteSpaceLength = rule.match(/^\s*/)[0].length;
    let firstLineIndentRegExp = new RegExp('^\\s{' + whiteSpaceLength + '}');
    let otherLinesIndentResExp = new RegExp('\\n\\s{' + whiteSpaceLength + '}', 'mg');
    //console.log(rule.match(otherLinesIndentResExp));
    //console.log(rule = rule.replace(firstLineIndentRegExp, '').replace(otherLinesIndentResExp, '\n'));
    return rule;
};

// 创建一个Style元素作为上下文
let createStyleContext = (componentName) => {
    let styleEl = doc.createElement('style');
    // TODO id check
    styleEl.id = componentName + 'StyleEl';
    styleEl.setAttribute("type", "text/css");
    headEl.appendChild(styleEl);

    let addedId = [];
    return {
        addRule: (id, rule) => {
            if (rule === undefined) {
                rule = id;
                addCSSRule(styleEl, clearRuleIndent(rule));
            } else if (-1 === addedId.indexOf(id)) {
                addedId.push(id);
                addCSSRule(styleEl, '/* '+ id +' */\n' + clearRuleIndent(rule));
            }
        }
    }
};

// 添加样式单位
let unitize = (any) => {
    let ret;
    if (typeof any === 'number') {
        ret = '' + any + 'px';
    } else if (typeof any === 'string') {
        if (any.match(/^\d+$/)) {
            ret = any + 'px';
        } else {
            ret = any;
        }
    } else {
        // undefined
        ret = 0;
    }
    return ret;
}

module.exports = {
    createStyleContext,
    unitize
};