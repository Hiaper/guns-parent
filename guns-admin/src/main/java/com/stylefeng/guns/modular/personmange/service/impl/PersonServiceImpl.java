package com.stylefeng.guns.modular.personmange.service.impl;

import com.stylefeng.guns.modular.system.model.Person;
import com.stylefeng.guns.modular.system.dao.PersonMapper;
import com.stylefeng.guns.modular.personmange.service.IPersonService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author stylefeng
 * @since 2022-07-20
 */
@Service
public class PersonServiceImpl extends ServiceImpl<PersonMapper, Person> implements IPersonService {

}
