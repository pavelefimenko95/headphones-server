import { ipInfo as IpInfo } from'../../models';

let lastUniqueRequestIp = '';

export const allRequests = async (req, res, next) => {
    try {
        let ip = req.ip;

        let ipInfo = await IpInfo.findOne({
            where: {
                ip
            }
        });

        if(ipInfo) {
            await IpInfo.update({
                requestsCount: ++ipInfo.requestsCount
            }, {
                where: {
                    ip: ipInfo.ip
                }
            });
        } else if (!ipInfo && ip !== lastUniqueRequestIp) {
            lastUniqueRequestIp = ip;

            await IpInfo.create({
                ip,
                requestsCount: 1
            });
        }

        next();
    } catch(e) {
        console.error(e);

        next();
    }
};