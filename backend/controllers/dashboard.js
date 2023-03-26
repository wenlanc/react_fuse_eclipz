const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const Service = require('../models/service');
const User = require('../models/user');
const Group = require('../models/group');
const Domain = require('../models/domain');
const App = require('../models/app');
const ClientUser = require('../models/clientuser');
const Session = require('../models/session');

const moment = require('moment');

const getData = async (req, res, next) => {    
    let where_domain_cond = { status: {[Sequelize.Op.not]:'D'}};
    let where_domain_query_admin = " and admins.status<>'D' ";
    let where_domain_query_user = " and users.status<>'D' ";
    let where_domain_query_service = " and services.status<>'D' ";
    if (!req.user.dataValues.issuperadmin) {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status':'A'} ;
        where_domain_query_admin = " and admins.status<>'D' and admins.domain_id = " + req.user.domain_id;
        where_domain_query_user  = " and users.status<>'D' and users.domain_id = " + req.user.domain_id;
        where_domain_query_service = " and services.status<>'D' and services.domain_id = " + req.user.domain_id;
    }
    
    let users_count = await ClientUser.count( { where: where_domain_cond } );
    let admins_count = await User.count( { where: where_domain_cond });
    let services_count = await Service.count({ where: where_domain_cond });
    let groups_count = await Group.count({ where: where_domain_cond });

    const currentMonthDates = new Array(moment().daysInMonth()).fill(null).map((x, i) => moment().startOf('month').add(i, 'days'));

    let adminSessionMonth = [];
    let userSessionMonth = [];
    let serviceSessionMonth = [];
    currentMonthDatesLabels = [];

    for (monthday of currentMonthDates) {
        var start = monthday.subtract(1, 'days').endOf('day').format('YYYY-MM-DD kk:mm:ss');
        var end = monthday.add(1, 'days').startOf('day').format('YYYY-MM-DD kk:mm:ss');
        //var date = new Date(start.valueOf()).getTime();
        //var date1 = new Date(end.valueOf()).getTime();
        let currMonth = await sequelize.query('SELECT count(*) as cnt FROM sessions INNER JOIN admins ON sessions.uid = admins.id where role LIKE $role and start_time > $start_at and start_time < $end_at ' + where_domain_query_admin,
                 { bind: { role: 'A', start_at: start, end_at: end}, type: Sequelize.QueryTypes.SELECT }
            )
        adminSessionMonth.push(currMonth[0].cnt);
        currMonth = await sequelize.query('SELECT count(*) as cnt FROM sessions INNER JOIN users ON sessions.uid = users.id where role LIKE $role and start_time > $start_at and start_time < $end_at ' + where_domain_query_user,
                 { bind: { role: 'U', start_at: start, end_at: end }, type: Sequelize.QueryTypes.SELECT }
            )
        userSessionMonth.push(currMonth[0].cnt);
        currMonth = await sequelize.query('SELECT count(*) as cnt FROM sessions INNER JOIN services ON sessions.uid = services.id where role LIKE $role and start_time > $start_at and start_time < $end_at ' + where_domain_query_service,
                 { bind: { role: 'S', start_at: start, end_at:end }, type: Sequelize.QueryTypes.SELECT }
            )
        serviceSessionMonth.push(currMonth[0].cnt);
        currentMonthDatesLabels.push(monthday.format("MMM-D"))
    }

    let service_rx = await sequelize.query("SELECT SUM(enclaves.responder_rxbytes) as total_rx, services.id as service_id, services.name as service_name FROM enclaves INNER JOIN services ON enclaves.responder_uid = services.id where responder_role LIKE 'S' "+where_domain_query_service+" group by services.id,services.name order by total_rx DESC limit 5 ");
    let service_rx_label = [];
    let service_rx_data = [];

    for (let row of service_rx[0]) {
        service_rx_label.push(row.service_name);
        service_rx_data.push(parseInt(row.total_rx));
    }

    let service_tx = await sequelize.query("SELECT SUM(enclaves.responder_txbytes) as total_tx, services.id as service_id, services.name as service_name FROM enclaves INNER JOIN services ON enclaves.responder_uid = services.id where responder_role LIKE 'S' "+where_domain_query_service+" group by services.id,services.name order by total_tx DESC limit 5 ");
    let service_tx_label = [];
    let service_tx_data = [];

    for (let row of service_tx[0]) {
        service_tx_label.push(row.service_name);
        service_tx_data.push(parseInt(row.total_tx));
    }

    let user_rx = await sequelize.query("SELECT SUM(enclaves.initiator_rxbytes) as total_rx, users.id as user_id, users.name as user_name FROM enclaves INNER JOIN users ON enclaves.initiator_uid = users.id where initiator_role LIKE 'U' "+where_domain_query_user+" group by users.id,users.name order by total_rx DESC limit 5 ");
    let user_rx_label = [];
    let user_rx_data = [];

    for (let row of user_rx[0]) {
        user_rx_label.push(row.user_name);
        user_rx_data.push(parseInt(row.total_rx));
    }

    let user_tx = await sequelize.query("SELECT SUM(enclaves.initiator_txbytes) as total_tx, users.id as user_id, users.name as user_name FROM enclaves INNER JOIN users ON enclaves.initiator_uid = users.id where initiator_role LIKE 'U' "+where_domain_query_user+" group by users.id,users.name order by total_tx DESC limit 5 ");
    let user_tx_label = [];
    let user_tx_data = [];

    for (let row of user_tx[0]) {
        user_tx_label.push(row.user_name);
        user_tx_data.push(parseInt(row.total_tx));
    }

    return res.send( { users_count, admins_count, services_count, groups_count, currentMonthDates, adminSessionMonth, userSessionMonth, serviceSessionMonth, currentMonthDatesLabels,service_rx_label,service_rx_data,service_tx_label,service_tx_data,user_rx_label,user_rx_data,user_tx_label, user_tx_data } );
}

module.exports = { getData };