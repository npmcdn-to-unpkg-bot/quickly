/*
* @Author: Andrey Starkov
* @Date:   2016-03-29 13:41:13
* @Last Modified by:   Andrey Starkov
* @Last Modified time: 2016-04-15 01:07:39
*/

var CompanyListActions = Reflux.createActions([
    'fetchList', 'updateData', 'filterData', 'selectByCuisine', 'getCurrentCuisine', 'setCurrentCity', 'selectById'
]);

module.exports = CompanyListActions;
