var express = require('express');
var router = express.Router();

//var faker = require("faker");
//faker.locale = "zh_CN";

router.post('/api/user/login', function(req, res, next) {
	const username = req.body.username;
	const password = req.body.password;

	if(!username) {
		return res.json({ code: -1, msg: '用户名不能为空' })
	}
	if(!password) {
		return res.json({ code: -1, msg: '密码不能为空' })
	}
	
	if(username === 'admin' && password === 'admin') {
		return res.json({ code: 0, token: 'asdastgg131sdfsgytyrear324gfg' })
	}else if(username === 'admin1' && password === 'admin1') {
		return res.json({ code: 0, token: 'asdastgg131sdfsgytyrear324gdd' })
	}else{
		return res.json({ code: 1, msg: '用户名或密码错误' })
	}
});

/**
 * 根据token获取用户信息：菜单、个人信息
 */
router.post('/api/user/info', function(req, res, next) {
//	var userMap = [{
//		name: '大数据（数加）',
//		children: [
//			{ id: 1, name: '机器学习', path: '/pagedemo', component: '/demo/pagedemo' }, 
//			{ id: 2, name: '数据集成', path: '/pagedemo1', component: '/demo/pagedemo1'}, 
//			{ id: 8, name: 'DataWorks', path: '/pagedemo2', component: '/demo/pagedemo2'}
//		]
//	},
//	{ name: '安全（云盾）', children: [
//						{ id: 3, name: 'DDoS高防IP', children: [
//													{ id: 31, name: '基础防护' }, 
//													{ id: 32, name: '高防IP', children: [
//																	{ id: 321, name: '安全报表' },
//																	{ id: 322, name: '网站' },
//																	{ id: 323, name: '非网站' },
//																	{ id: 323, name: '实例列表' },
//																	{ id: 325, name: '操作日志' }
//																]
//													}]
//						},
//		{ id: 4, name: '云盾 ● 态势感知', children: [
//					{ id: 6, name: '组件1-1', path: '/pagedemo4', component: '/demo/pagedemo4' },
//					{ id: 7, name: '组件1-2', path: '/pagedemo5', component: '/demo/pagedemo5' },
//					{ id: 8, name: '组件1-3', children: [
//											{ id: 481, name: '组件1-3-1', path: '/pagedemo6', component: '/demo/pagedemo6' }, 
//											{ id: 482, name: '组件1-3-2', path: '/pagedemo7', component: '/demo/pagedemo7' }, 
//											{ id: 483, name: '组件1-3-3' }
//										]
//					},
//					{ id: 9, name: '组件1-4', children: [
//											{ id: 491, name: '组件1-4-1', path: '/pagedemo8', component: '/demo/pagedemo8' }, 
//											{ id: 492, name: '组件1-4-2' }, 
//											{ id: 493, name: '组件1-4-3' }
//										]
//					}
//				]
//		}
//		]
//	},
//	{ name: '测试', children: [{ id: 5, name: '测试1', path: '/pagedemo3', component: '/demo/pagedemo3' }] }
//];

	console.log('token==='+req.headers.authorization || req.headers['authorization'])
	
	const token = req.headers.authorization || req.headers['authorization']
	if(!token){
		return res.json({ code: -1, msg: '请登录'});
	}
	if(token=='asdastgg131sdfsgytyrear324gfg'){
		var userMap = [ { name: '大数据（数加）', children: [
									{ id: 1, name: '机器学习', path: 'pagedemo0', component: 'demo/pagedemo' }, 
									{ id: 2, name: '数据集成', path: 'pagedemo1', component: 'demo/pagedemo1'}, 
									{ id: 8, name: 'DataWorks', path: 'pagedemo2', component: 'demo/pagedemo2'}
								]}]
		return res.json({ code: 0, maps: userMap});
		
	}else{
	


userMap = [
		{ name: '大数据（数加）', children: [
								{ id: 1, name: '机器学习', path: 'pagedemo0', component: 'demo/pagedemo' }, 
								{ id: 2, name: '数据集成', path: 'pagedemo1', component: 'demo/pagedemo1'}, 
								{ id: 8, name: 'DataWorks', path: 'pagedemo2', component: 'demo/pagedemo2'}
							]
		},
		{ name: '安全（云盾）', children: [
						{ id: 3, name: 'DDoS高防IP', children: [
													{ id: 31, name: '基础防护' }, 
													{ id: 32, name: '高防IP', children: [
																	{ id: 321, name: '安全报表' },
																	{ id: 322, name: '网站' },
																	{ id: 323, name: '非网站' },
																	{ id: 323, name: '实例列表' },
																	{ id: 325, name: '操作日志' }
																]
													}]
						},
		{ id: 4, name: '云盾 ● 态势感知', children: [
					{ id: 6, name: '组件1-1', path: 'pagedemo4', component: 'demo/pagedemo4' },
					{ id: 7, name: '组件1-2', path: 'pagedemo5', component: 'demo/pagedemo5' },
					{ id: 8, name: '组件1-3', children: [
											{ id: 481, name: '组件1-3-1', path: 'pagedemo6', component: 'demo/pagedemo6' }, 
											{ id: 482, name: '组件1-3-2', path: 'pagedemo7', component: 'demo/pagedemo7' }, 
											{ id: 483, name: '组件1-3-3' }
										]
					},
					{ id: 9, name: '组件1-4', children: [
											{ id: 491, name: '组件1-4-1', path: 'pagedemo8', component: 'demo/pagedemo8' }, 
											{ id: 492, name: '组件1-4-2' }, 
											{ id: 493, name: '组件1-4-3' }
										]
					}
				]
		}
		]
	},
	{ name: '测试', children: [{ id: 5, name: '测试1', path: 'pagedemo3', component: 'index' }] }
];


		return res.json({ code: 0, maps: userMap});
	}

});



module.exports = router;